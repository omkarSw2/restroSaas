import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';

// Initialize PouchDB plugins
PouchDB.plugin(PouchDBFind);

// Define local databases
export const localOrdersDB = new PouchDB('local_orders');
export const localMenuDB = new PouchDB('local_menu');

// Types for Sync
interface SyncResult {
  ok: boolean;
  docs_written: number;
  errors: unknown[];
}

/**
 * Sync Manager to handle bi-directional sync between PouchDB and MongoDB
 */
export class SyncManager {
  private static isSyncing = false;

  /**
   * Pushes local changes to the server
   */
  static async pushToRemote() {
    if (this.isSyncing || !navigator.onLine) return;
    this.isSyncing = true;

    try {
      // 1. Get all local docs that haven't been synced or have changed
      // In a real PouchDB setup, we might filter by a '_synced' flag or use replication
      // For this custom setup, we'll fetch all 'pending' orders
      const result = await localOrdersDB.find({
        selector: { status: 'open' }, // Example selector
      });

      if (result.docs.length === 0) {
        this.isSyncing = false;
        return;
      }

      // 2. Send to API
      const response = await fetch('/api/sync/push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ docs: result.docs }),
      });

      if (!response.ok) throw new Error('Sync failed');

      const data: SyncResult = await response.json();
      console.log(`Synced ${data.docs_written} documents.`);
      
      // 3. Mark as synced or remove from local if needed strategy-wise
      // For now, we keep them but maybe update a metadata flag

    } catch (error) {
      console.error('Sync Error:', error);
    } finally {
      this.isSyncing = false;
    }
  }

  /**
   * Pulls latest data from the server
   */
  static async pullFromRemote() {
    if (!navigator.onLine) return;

    try {
      const response = await fetch('/api/sync/pull');
      if (!response.ok) throw new Error('Pull failed');
      
      const data = await response.json();
      
      // Bulk write to PouchDB
      if (data.orders && data.orders.length > 0) {
        await localOrdersDB.bulkDocs(data.orders);
      }
      
      if (data.menu && data.menu.length > 0) {
        await localMenuDB.bulkDocs(data.menu);
      }
      
    } catch (error) {
      console.error('Pull Error:', error);
    }
  }

  /**
   * Initialize background sync listeners
   */
  static init() {
    window.addEventListener('online', () => {
      console.log('App is online. Syncing...');
      this.pushToRemote();
      this.pullFromRemote();
    });

    // Periodic sync (every 1 minute)
    setInterval(() => {
      if (navigator.onLine) {
        this.pushToRemote();
      }
    }, 60000);
  }
}

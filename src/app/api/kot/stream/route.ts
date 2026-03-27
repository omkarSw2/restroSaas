import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db/mongodb';
import { Order } from '@/lib/db/models';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const encoder = new TextEncoder();
  const customReadable = new ReadableStream({
    async start(controller) {
      await dbConnect();

      // Send initial connection message
      controller.enqueue(encoder.encode('data: {"type":"connected"}\n\n'));

      // Watch for changes in the Orders collection
      // Note: Change Streams require a replica set in MongoDB (Atlas provides this by default)
      const changeStream = Order.watch([], { fullDocument: 'updateLookup' });

      changeStream.on('change', (change) => {
        if (change.operationType === 'insert' || change.operationType === 'update') {
          const data = JSON.stringify(change.fullDocument);
          controller.enqueue(encoder.encode(`data: ${data}\n\n`));
        }
      });

      changeStream.on('error', (error) => {
        console.error('Change Stream Error:', error);
        controller.error(error);
      });

      // Keep connection alive
      const interval = setInterval(() => {
        controller.enqueue(encoder.encode(':\n\n')); 
      }, 15000);

      req.signal.addEventListener('abort', () => {
        clearInterval(interval);
        changeStream.close();
        controller.close();
      });
    },
  });

  return new NextResponse(customReadable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}

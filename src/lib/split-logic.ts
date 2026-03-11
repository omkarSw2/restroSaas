interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export type SplitType = 'EQUAL' | 'ITEM';

export interface SplitResult {
  guestId: number;
  items: OrderItem[];
  total: number;
}

/**
 * Splits the bill equally among a number of guests.
 */
export const splitByGuest = (totalAmount: number, guestCount: number): number => {
  if (guestCount <= 0) return totalAmount;
  return Number((totalAmount / guestCount).toFixed(2));
};

/**
 * Splits the bill based on selected items for each guest.
 * Returns a breakdown for the current split and the remaining items.
 */
export const splitByItem = (
  originalItems: OrderItem[],
  selectedItemsForSplit: { itemId: string; quantity: number }[]
): { splitTotal: number; remainingItems: OrderItem[] } => {
  let splitTotal = 0;
  
  // Clone items to avoid mutating original array directly in an impure way if reused
  const remainingItems = originalItems.map(item => ({ ...item }));

  selectedItemsForSplit.forEach((splitItem) => {
    const targetIndex = remainingItems.findIndex((i) => i.id === splitItem.itemId);
    
    if (targetIndex !== -1) {
      const item = remainingItems[targetIndex];
      
      // Calculate cost for the split
      splitTotal += item.price * splitItem.quantity;
      
      // Update remaining quantity
      item.quantity -= splitItem.quantity;
      
      // Remove item if quantity matches (used up) or is 0
      if (item.quantity <= 0) {
        remainingItems.splice(targetIndex, 1);
      }
    }
  });

  return {
    splitTotal: Number(splitTotal.toFixed(2)),
    remainingItems,
  };
};

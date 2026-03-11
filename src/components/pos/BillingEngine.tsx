"use client";

import React, { useState, useEffect } from "react";
import { localOrdersDB, SyncManager } from "@/lib/db/offline-sync";
import { Plus, Minus, Trash2, Wifi, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CartItem {
  _id: string; // Menu Item ID
  name: string;
  price: number;
  quantity: number;
}

export default function BillingEngine() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOnline, setIsOnline] = useState(() =>
    typeof window !== "undefined" ? navigator.onLine : true,
  );

  useEffect(() => {
    // Listen for status changes
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Initialize Sync Manager
    SyncManager.init();

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((i) => i._id === item._id);
      if (existing) {
        return prev.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i._id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((i) => {
        if (i._id === id) {
          const newQty = Math.max(1, i.quantity + delta);
          return { ...i, quantity: newQty };
        }
        return i;
      }),
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = async () => {
    const order = {
      _id: new Date().toISOString(), // PouchDB ID
      items: cart,
      total: calculateTotal(),
      status: "open",
      createdAt: new Date().toISOString(),
      synced: false,
    };

    try {
      // Save locally first
      await localOrdersDB.put(order);
      alert("Order placed successfully (Saved Offline)!");
      setCart([]);

      // Try to sync immediately if online
      if (isOnline) {
        SyncManager.pushToRemote();
      }
    } catch (err) {
      console.error("Failed to save order", err);
      alert("Error placing order.");
    }
  };

  // Mock Menu Data (Replace with PouchDB Menu later)
  const mockMenu = [
    { _id: "1", name: "Burger", price: 12.99 },
    { _id: "2", name: "Pizza", price: 15.5 },
    { _id: "3", name: "Pasta", price: 10.0 },
    { _id: "4", name: "Coke", price: 2.5 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 h-screen bg-gray-50">
      {/* Menu Section */}
      <div className="md:col-span-2 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Menu</h2>
          <Badge
            variant={isOnline ? "default" : "destructive"}
            className="gap-2"
          >
            {isOnline ? <Wifi size={16} /> : <WifiOff size={16} />}
            {isOnline ? "Online" : "Offline Mode"}
          </Badge>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {mockMenu.map((item) => (
            <Card
              key={item._id}
              className="cursor-pointer hover:shadow-lg transition-all"
              onClick={() => addToCart(item)}
            >
              <CardHeader>
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <p className="text-gray-500 font-medium">
                  ${item.price.toFixed(2)}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>Current Order</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 pr-4">
            {cart.length === 0 ? (
              <p className="text-gray-400 text-center mt-10">Cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center bg-white p-2 rounded-lg border"
                  >
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-500">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item._id, -1)}
                      >
                        <Minus size={14} />
                      </Button>
                      <span className="w-6 text-center">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item._id, 1)}
                      >
                        <Plus size={14} />
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        className="h-8 w-8"
                        onClick={() => removeFromCart(item._id)}
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>

          <div className="mt-4 pt-4 border-t space-y-4">
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>

            <Button
              className="w-full h-12 text-lg"
              onClick={handlePlaceOrder}
              disabled={cart.length === 0}
            >
              Place Order
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface KOTOrder {
  _id: string;
  table_id: string; // Populate if needed
  items: { name: string; quantity: number }[];
  status: string;
  notes?: string;
  createdAt: string;
}

export default function KOTDisplay() {
  const [orders, setOrders] = useState<KOTOrder[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const eventSource = new EventSource("/api/kot/stream");

    eventSource.onopen = () => {
      setIsConnected(true);
      console.log("KOT Connected");
    };

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "connected") return;

        // Add new order to top of list
        setOrders((prev) => [data, ...prev]);
      } catch (error) {
        console.error("Error parsing KOT data", error);
      }
    };

    eventSource.onerror = (err) => {
      console.error("SSE Error:", err);
      setIsConnected(false);
      eventSource.close();
      // Auto-reconnect logic could go here
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-orange-500">
          Kitchen Display System (KDS)
        </h1>
        <Badge variant={isConnected ? "default" : "destructive"}>
          {isConnected ? "Live" : "Disconnected"}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.length === 0 ? (
          <p className="text-gray-500 col-span-3 text-center text-xl mt-20">
            No active orders...
          </p>
        ) : (
          orders.map((order) => (
            <Card
              key={order._id}
              className="bg-gray-800 border-gray-700 text-white"
            >
              <CardHeader className="bg-gray-700/50 rounded-t-lg">
                <div className="flex justify-between">
                  <CardTitle>Order #{order._id.slice(-4)}</CardTitle>
                  <span className="text-sm font-mono">
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2">
                  {order.items?.map(
                    (item: { name: string; quantity: number }, idx: number) => (
                      <li
                        key={idx}
                        className="flex justify-between border-b border-gray-700 pb-1"
                      >
                        <span>
                          {item.quantity}x {item.name}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
                {order.notes && (
                  <div className="mt-4 p-2 bg-yellow-900/30 text-yellow-200 text-sm rounded border border-yellow-700/50">
                    Note: {order.notes}
                  </div>
                )}
                <div className="mt-4">
                  <Badge className="bg-blue-600">{order.status}</Badge>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

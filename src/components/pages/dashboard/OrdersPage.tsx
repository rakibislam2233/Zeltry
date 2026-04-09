"use client";
import { Eye, Package } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Mock Order Data
const orders = [
  {
    id: "#49281",
    date: "Oct 24, 2023",
    status: "Delivered",
    statusClass: "bg-green-100 text-green-700",
    total: 124.5,
    items: 2,
    product: "Sony WH-1000XM4 Noise Canceling Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: "#49302",
    date: "Nov 02, 2023",
    status: "Processing",
    statusClass: "bg-blue-100 text-blue-700",
    total: 49.0,
    items: 1,
    product: "Nike Air Max 270 React - Red/Black",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: "#49305",
    date: "Nov 03, 2023",
    status: "Pending",
    statusClass: "bg-yellow-100 text-yellow-700",
    total: 210.0,
    items: 1,
    product: "Apple Watch Series 8 - Midnight",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: "#48992",
    date: "Sep 12, 2023",
    status: "Cancelled",
    statusClass: "bg-red-100 text-red-700",
    total: 35.0,
    items: 3,
    product: "Basic Cotton T-Shirt Pack (3)",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=150&auto=format&fit=crop",
  },
];

const tabs = ["All Orders", "Pending", "Processing", "Delivered", "Cancelled"];

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  const filteredOrders =
    activeTab === "All Orders"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-text-main">My Orders</h2>
        <div className="flex bg-gray-100 p-1 rounded overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab ? "bg-white text-primary" : "text-text-muted"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded border border-gray-200 p-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="w-20 h-20 shrink-0 bg-gray-50 rounded overflow-hidden flex items-center justify-center p-2">
                  <Image
                    src={order.image}
                    alt={order.product}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-text-main text-lg">
                        Order {order.id}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${order.statusClass}`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-text-muted">
                      Placed on {order.date}
                    </p>
                    <div className="flex items-center gap-2 md:hidden">
                      <span className="font-bold text-primary">
                        ${order.total.toFixed(2)}
                      </span>
                      <span className="text-xs text-text-muted">
                        ({order.items} items)
                      </span>
                    </div>
                    <p className="text-sm font-medium text-text-main line-clamp-1">
                      {order.product}{" "}
                      <span className="text-text-muted font-normal">
                        + {order.items > 1 ? order.items - 1 : 0} more
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between md:flex-col md:items-end gap-2 md:gap-4 pl-0 md:pl-4 md:border-l border-gray-200 min-w-35">
                    <div className="hidden md:flex flex-col items-end">
                      <span className="font-bold text-lg text-primary">
                        ${order.total.toFixed(2)}
                      </span>
                      <span className="text-xs text-text-muted">
                        {order.items} Items
                      </span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded border border-gray-200 text-sm font-medium transition-all w-full md:w-auto justify-center">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded border border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-text-muted" />
            </div>
            <h3 className="text-lg font-bold text-text-main mb-2">
              No orders found
            </h3>
            <p className="text-text-muted max-w-sm mx-auto">
              You have not placed any orders in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;

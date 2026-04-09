"use client";

import Breadcrumb from "@/components/shared/Breadcrumb";
import { initialCartItems } from "@/data/cart";
import { useState } from "react";
import CartTable from "./CartTable";
import CartTotals from "./CartTotals";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(1, item.quantity + delta) };
        }

        return item;
      }),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full">
      <Breadcrumb
        items={[{ label: "Shop", href: "/shop" }, { label: "Shopping Cart" }]}
      />

      <h1 className="text-3xl font-bold text-center mb-8">My Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <CartTable
            cartItems={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
          />
        </div>
        <div className="w-full lg:w-[320px] shrink-0">
          <CartTotals cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

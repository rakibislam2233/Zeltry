"use client";

import { initialCartItems, type CartItem } from "@/data/cart";
import { ArrowRight, Minus, Plus, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SHEET_ANIMATION_MS = 500;

const CartSheet = ({ open, onOpenChange }: CartSheetProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [isRendered, setIsRendered] = useState(open);
  const [isVisible, setIsVisible] = useState(open);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (open) {
      setIsRendered(true);
      window.requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      closeTimerRef.current = window.setTimeout(() => {
        setIsRendered(false);
      }, SHEET_ANIMATION_MS);
    }

    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    };
  }, [open]);

  useEffect(() => {
    if (!isRendered) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRendered, onOpenChange]);

  useEffect(() => {
    if (open) {
      setCartItems(initialCartItems);
    }
  }, [open]);

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  );

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  if (!isRendered || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close cart"
        className={`absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => onOpenChange(false)}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transform-gpu transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Cart Preview
            </p>
            <h2 className="text-lg font-bold text-text-main">Your Shopping Cart</h2>
          </div>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-text-muted"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                  <div
                    className="h-20 w-20 shrink-0 rounded-md border border-gray-200 bg-gray-50 p-2 bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(${item.image})` }}
                    aria-label={item.name}
                    role="img"
                  />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-text-main">{item.name}</p>
                        <p className="mt-1 text-sm text-text-muted">${item.price.toFixed(2)} each</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-gray-400"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center border border-gray-200 rounded-md h-9 w-fit bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="flex h-full w-8 items-center justify-center text-gray-500"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold text-text-main">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="flex h-full w-8 items-center justify-center text-gray-500"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <p className="font-bold text-text-main">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
              <p className="text-lg font-bold text-text-main">Your cart is empty</p>
              <p className="mt-2 text-sm text-text-muted">Add products from the shop to continue.</p>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 px-5 py-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-muted">Subtotal</span>
            <span className="text-lg font-bold text-text-main">${subtotal.toFixed(2)}</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/cart"
              onClick={() => onOpenChange(false)}
              className="inline-flex items-center justify-center rounded-md border border-gray-200 px-4 py-3 text-sm font-semibold text-text-main"
            >
              View Cart Page
            </Link>
            <Link
              href="/checkout"
              onClick={() => onOpenChange(false)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white"
            >
              Checkout
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </aside>
    </div>,
    document.body,
  );
};

export default CartSheet;

import type { CartItem } from "@/data/cart";
import Link from "next/link";

interface CartTotalsProps {
  cartItems: CartItem[];
}

const CartTotals = ({ cartItems }: CartTotalsProps) => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="bg-white rounded-md border border-gray-200 p-6 shadow-sm h-fit">
      <h2 className="text-lg font-bold text-text-main mb-6">Cart Total</h2>

      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <span className="text-text-muted text-sm">Subtotal:</span>
          <span className="font-bold text-text-main">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <span className="text-text-muted text-sm">Shipping:</span>
          <span className="font-bold text-text-main">Free</span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-transparent">
          <span className="text-text-main font-medium">Total:</span>
          <span className="font-bold text-lg text-primary">
            ${subtotal.toFixed(2)}
          </span>
        </div>
      </div>

      <Link
        href="/checkout"
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-md flex items-center justify-center transition-colors shadow-lg shadow-primary/20"
      >
        Proceed to Checkout
      </Link>

      <div className="mt-8">
        <h3 className="font-bold text-text-main mb-2">Coupon Code</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter code"
            className="w-full h-12 pl-4 pr-24 rounded-md border border-gray-200 bg-transparent focus:border-primary focus:ring-0 outline-none"
          />
          <button className="absolute right-1 top-1 bottom-1 bg-text-main text-white px-5 rounded-md font-bold text-xs hover:bg-black transition-colors">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;

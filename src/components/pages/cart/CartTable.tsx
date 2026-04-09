import type { CartItem } from "@/data/cart";
import { Minus, Plus, X } from "lucide-react";
import Link from "next/link";

interface CartTableProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
}

const CartTable = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}: CartTableProps) => {
  return (
    <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 text-text-muted text-xs uppercase font-bold border-b border-gray-200">
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Quantity</th>
              <th className="px-6 py-4">Subtotal</th>
              <th className="px-6 py-4 w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {cartItems.map((item) => (
              <tr
                key={item.id}
                className="group hover:bg-gray-50/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-md border bg-white p-1 shrink-0 bg-center bg-no-repeat bg-contain"
                      style={{ backgroundImage: `url(${item.image})` }}
                      aria-label={item.name}
                      role="img"
                    />
                    <span className="font-medium text-text-main group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-text-main font-medium">
                  ${item.price.toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center border border-gray-200 rounded-full h-9 w-fit bg-white">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-bold text-text-main">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-text-main">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/shop"
          className="text-sm font-bold bg-gray-100 text-text-main px-6 py-3 rounded-md hover:bg-gray-200 transition-colors w-full sm:w-auto text-center"
        >
          Return to Shop
        </Link>
        <button className="text-sm font-bold border border-gray-200 text-text-main px-6 py-3 rounded-md hover:bg-primary hover:text-white hover:border-primary transition-all w-full sm:w-auto">
          Update Cart
        </button>
      </div>
    </div>
  );
};

export default CartTable;

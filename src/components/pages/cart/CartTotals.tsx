import Link from 'next/link';

const CartTotals = () => {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm h-fit">
            <h2 className="text-lg font-bold text-text-main dark:text-white mb-6">Cart Total</h2>

            <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-text-muted text-sm">Subtotal:</span>
                    <span className="font-bold text-text-main dark:text-white">$84.00</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-text-muted text-sm">Shipping:</span>
                    <span className="font-bold text-text-main dark:text-white">Free</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-transparent">
                    <span className="text-text-main dark:text-white font-medium">Total:</span>
                    <span className="font-bold text-lg text-primary">$84.00</span>
                </div>
            </div>

            <Link href="/checkout" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-full flex items-center justify-center transition-colors shadow-lg shadow-primary/20">
                Proceed to Checkout
            </Link>

            <div className="mt-8">
                <h3 className="font-bold text-text-main dark:text-white mb-2">Coupon Code</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Enter code"
                        className="w-full h-12 pl-4 pr-24 rounded-full border border-gray-200 dark:border-gray-700 bg-transparent focus:border-primary focus:ring-0 outline-none"
                    />
                    <button className="absolute right-1 top-1 bottom-1 bg-text-main dark:bg-gray-700 text-white dark:text-white px-5 rounded-full font-bold text-xs hover:bg-black transition-colors">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartTotals;


const OrderSummary = () => {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-text-main dark:text-white mb-6">Order Summary</h2>

            <div className="flex flex-col gap-4 mb-6">
                {[1, 2].map(i => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded border bg-white p-1 flex-shrink-0">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4bDAHC4b7UhmkO7nHgs2vjXZ6egKyv4IZCUP0MkH7vjcgd1cC8QHldltnUEO6MlNr4dXHibNB4RQuCo6yRd7P1GtjRzHpiqXxVKzr_vsOBodY_qSyASHz4W-zg4urN9781S_pH7TTOTSe0DfITyYSOs-c0epBdkrJrH_kaI8c0zjROsQqnjofaE-yNE1MV59WEW-U_V5xVEiYH_3qXPlgQSaF81DN0HUciwkA93D_MS6XDSNodbtzRSssU-guwikE_6JG6xijPJMr" alt="Apple" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-medium text-text-main dark:text-white line-clamp-1">Green Apple</h4>
                            <p className="text-xs text-text-muted">x5</p>
                        </div>
                        <span className="font-bold text-sm text-text-main dark:text-white">$70.00</span>
                    </div>
                ))}
            </div>

            <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-text-muted">Subtotal:</span>
                    <span className="font-medium text-text-main dark:text-white">$84.00</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-text-muted">Shipping:</span>
                    <span className="font-medium text-text-main dark:text-white">Free</span>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-3">
                    <span className="font-bold text-text-main dark:text-white">Total:</span>
                    <span className="font-bold text-lg text-primary">$84.00</span>
                </div>
            </div>

            <h3 className="font-bold text-text-main dark:text-white mb-4">Payment Method</h3>

            <div className="space-y-3 mb-6">
                <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                        <input type="radio" name="payment" defaultChecked className="peer w-5 h-5 appearance-none border-2 border-gray-300 rounded-full checked:border-primary checked:border-[5px] transition-all" />
                    </div>
                    <span className="text-sm font-medium text-text-main dark:text-gray-300 group-hover:text-primary transition-colors">Cash on Delivery</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                        <input type="radio" name="payment" className="peer w-5 h-5 appearance-none border-2 border-gray-300 rounded-full checked:border-primary checked:border-[5px] transition-all" />
                    </div>
                    <span className="text-sm font-medium text-text-main dark:text-gray-300 group-hover:text-primary transition-colors">Paypal</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                        <input type="radio" name="payment" className="peer w-5 h-5 appearance-none border-2 border-gray-300 rounded-full checked:border-primary checked:border-[5px] transition-all" />
                    </div>
                    <span className="text-sm font-medium text-text-main dark:text-gray-300 group-hover:text-primary transition-colors">Amazon Pay</span>
                </label>
            </div>

            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-full flex items-center justify-center transition-colors shadow-lg shadow-primary/20">
                Place Order
            </button>
        </div>
    );
};

export default OrderSummary;

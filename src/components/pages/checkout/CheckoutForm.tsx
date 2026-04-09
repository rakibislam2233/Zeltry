
const CheckoutForm = () => {
    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-text-main">Billing Details</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-main">First Name</label>
                    <input type="text" placeholder="Your first name" className="px-4 h-12 rounded border border-gray-200 bg-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-main">Last Name</label>
                    <input type="text" placeholder="Your last name" className="px-4 h-12 rounded border border-gray-200 bg-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-medium text-text-main">Company Name (Optional)</label>
                    <input type="text" placeholder="Company name" className="px-4 h-12 rounded border border-gray-200 bg-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-medium text-text-main">Street Address</label>
                    <input type="text" placeholder="House number and street name" className="px-4 h-12 rounded border border-gray-200 bg-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-main">Country / Region</label>
                    <select className="px-4 h-12 rounded border border-gray-200 bg-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-muted">
                        <option>Select</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Bangladesh</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-main">States</label>
                    <select className="px-4 h-12 rounded border border-gray-200 bg-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-muted">
                        <option>Selects</option>
                        <option>New York</option>
                        <option>London</option>
                        <option>Dhaka</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-main">Zip Code</label>
                    <input type="text" placeholder="Zip Code" className="px-4 h-12 rounded border border-gray-200 bg-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-main">Phone</label>
                    <input type="text" placeholder="Phone Number" className="px-4 h-12 rounded border border-gray-200 bg-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center">
                            <input type="checkbox" className="peer w-5 h-5 appearance-none border-2 border-gray-300 rounded checked:bg-primary checked:border-primary transition-colors" />
                            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <span className="text-sm text-text-main group-hover:text-primary transition-colors">Ship to a different address?</span>
                    </label>
                </div>

                <div className="flex flex-col gap-2 md:col-span-2 mt-2">
                    <label className="text-sm font-medium text-text-main">Order Notes (Optional)</label>
                    <textarea
                        rows={4}
                        placeholder="Notes about your order, e.g. special notes for delivery"
                        className="p-4 rounded border border-gray-200 bg-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    />
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;

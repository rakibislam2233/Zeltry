'use client';
import { Mail, MapPin, Pencil, Phone, Plus } from 'lucide-react';

const AddressesPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-text-main dark:text-white">Addresses</h2>
                    <p className="text-text-muted text-sm">Manage your billing and shipping addresses</p>
                </div>
                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary-dark transition-colors shadow-md shadow-primary/20">
                    <Plus className="w-4 h-4" />
                    Add New Address
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Billing Address */}
                <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm relative group">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded uppercase tracking-wider">Billing Address</span>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 text-text-muted hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
                                <Pencil className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">Alex Doe</h3>
                    <div className="space-y-2 mt-4 text-sm text-text-muted">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                            <p>123 Market Street, Suite 400<br />San Francisco, CA 94105<br />United States</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 shrink-0" />
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 shrink-0" />
                            <p>alex.doe@example.com</p>
                        </div>
                    </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm relative group">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded uppercase tracking-wider">Shipping Address</span>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 text-text-muted hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
                                <Pencil className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">Alex Doe</h3>
                    <div className="space-y-2 mt-4 text-sm text-text-muted">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                            <p>456 Oak Avenue, Apt 2B<br />New York, NY 10012<br />United States</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 shrink-0" />
                            <p>+1 (555) 987-6543</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 shrink-0" />
                            <p>alex.doe@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressesPage;

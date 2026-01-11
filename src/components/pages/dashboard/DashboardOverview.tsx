import { MapPin, Package, Truck } from 'lucide-react';

const DashboardOverview = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center">
                        <Package className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-2xl text-text-main dark:text-white">154</h4>
                        <p className="text-sm text-text-muted">Total Orders</p>
                    </div>
                </div>
                <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500 flex items-center justify-center">
                        <Truck className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-2xl text-text-main dark:text-white">05</h4>
                        <p className="text-sm text-text-muted">Pending Orders</p>
                    </div>
                </div>
                <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 text-green-500 flex items-center justify-center">
                        <Package className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-2xl text-text-main dark:text-white">149</h4>
                        <p className="text-sm text-text-muted">Completed Orders</p>
                    </div>
                </div>
                <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/20 text-red-500 flex items-center justify-center">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-2xl text-text-main dark:text-white">02</h4>
                        <p className="text-sm text-text-muted">Saved Address</p>
                    </div>
                </div>
            </div>

            {/* Recent Order History */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
                <div className="p-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
                    <h2 className="font-bold text-lg text-text-main dark:text-white">Recent Order History</h2>
                    <button className="text-primary text-sm font-medium hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-800 text-text-muted text-xs uppercase font-bold">
                                <th className="px-6 py-4">Order ID</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Total</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {[
                                { id: '#738', date: '8 Sep, 2023', total: '$135.00 (5 Products)', status: 'Processing' },
                                { id: '#703', date: '24 May, 2023', total: '$25.00 (1 Product)', status: 'Completed' },
                                { id: '#130', date: '22 Oct, 2023', total: '$250.00 (4 Products)', status: 'Completed' },
                                { id: '#561', date: '1 Feb, 2023', total: '$35.00 (1 Product)', status: 'Completed' },
                                { id: '#536', date: '21 Sep, 2023', total: '$578.00 (13 Products)', status: 'Completed' },
                            ].map((order, i) => (
                                <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-text-main dark:text-white">{order.id}</td>
                                    <td className="px-6 py-4 text-text-muted text-sm">{order.date}</td>
                                    <td className="px-6 py-4 text-text-muted text-sm">{order.total}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs font-bold px-2 py-1 rounded-md ${order.status === 'Processing'
                                                ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30'
                                                : 'bg-green-100 text-green-600 dark:bg-green-900/30'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-primary hover:underline text-sm font-medium">View Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;

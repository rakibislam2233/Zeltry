export default function DashboardPage() {
    return (
        <div>
            <h3 className="text-xl font-bold mb-4">Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                    <h4 className="text-muted-foreground text-sm font-medium">Total Orders</h4>
                    <p className="text-2xl font-bold mt-2">156</p>
                </div>
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                    <h4 className="text-muted-foreground text-sm font-medium">Pending Delivery</h4>
                    <p className="text-2xl font-bold mt-2">12</p>
                </div>
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                    <h4 className="text-muted-foreground text-sm font-medium">Total Spent</h4>
                    <p className="text-2xl font-bold mt-2">$2,345.00</p>
                </div>
            </div>
        </div>
    );
}

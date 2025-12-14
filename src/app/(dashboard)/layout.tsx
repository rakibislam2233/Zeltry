import { ReactNode } from "react";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 border-r bg-muted/10 hidden lg:block p-6">
                <h2 className="text-lg font-bold mb-6">Oryzn Dashboard</h2>
                <nav className="space-y-2">
                    <div className="px-4 py-2 bg-primary/10 text-primary rounded-md font-medium">Overview</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md font-medium text-muted-foreground">Orders</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md font-medium text-muted-foreground">Settings</div>
                </nav>
            </aside>
            <div className="flex-1 flex flex-col">
                <header className="h-16 border-b flex items-center px-6 font-semibold">
                    User Dashboard
                </header>
                <main className="p-6 flex-1 bg-muted/5">{children}</main>
            </div>
        </div>
    );
}

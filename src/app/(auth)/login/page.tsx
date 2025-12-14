export default function LoginPage() {
    return (
        <div className="bg-card p-8 rounded-lg border shadow-sm w-full">
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full h-10 px-3 rounded-md border bg-background" placeholder="name@example.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input type="password" className="w-full h-10 px-3 rounded-md border bg-background" placeholder="••••••••" />
                </div>
                <button className="w-full h-10 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-colors">
                    Sign In
                </button>
            </form>
        </div>
    );
}

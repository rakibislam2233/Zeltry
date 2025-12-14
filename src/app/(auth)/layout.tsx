import { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl mx-auto mb-4">
                        O
                    </div>
                    <h1 className="text-2xl font-bold">Welcome Back</h1>
                </div>
                {children}
            </div>
        </div>
    );
}

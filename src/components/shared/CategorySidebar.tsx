import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CategorySidebar() {
    const categories = [
        "Fresh Fruit",
        "Vegetables",
        "River Fish",
        "Chicken & Meat",
        "Drink & Water",
        "Yogurt & Ice Cream",
        "Cake & Bread",
        "Butter & Cream",
        "Cooking",
        "View all Categories"
    ];

    return (
        <div className="w-full bg-card border rounded-lg overflow-hidden shadow-sm">
            <ul className="flex flex-col text-sm font-medium text-foreground/80">
                {categories.map((cat, i) => (
                    <li key={i}>
                        <Link
                            href="/shop"
                            className="flex items-center justify-between px-5 py-3 hover:bg-primary/5 hover:text-primary hover:font-bold transition-all border-b last:border-0 border-dashed border-gray-100"
                        >
                            <span>{cat}</span>
                            {i < 3 && <ArrowRight className="h-3 w-3 opacity-50" />}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

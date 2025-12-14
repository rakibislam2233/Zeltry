
import { ProductCard } from "@/components/common/ProductCard";
import Link from "next/link";
import { ArrowRight, Truck, Headphones, ShieldCheck, Package } from "lucide-react";

export function HomePage() {
    return (
        <div className="bg-background pb-16">

            {/* Hero Container - Grid (Sidebar, Main, Side Banners) */}
            <section className="container mx-auto px-4 pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Sidebar (Col 3/12) - Visible on Desktop, Hidden Mobile */}
                    <div className="hidden lg:flex lg:col-span-3 flex-col border rounded-lg overflow-hidden h-fit bg-card shadow-sm">
                        <ul className="flex flex-col text-sm font-medium text-foreground/80">
                            {["Fresh Fruit", "Vegetables", "River Fish", "Chicken & Meat", "Drink & Water", "Yogurt & Ice Cream", "Cake & Bread", "Butter & Cream", "Cooking", "View all Categories"].map((cat, i) => (
                                <li key={i}>
                                    <Link href="#" className="flex items-center justify-between px-5 py-3 hover:bg-primary/5 hover:text-primary hover:font-bold transition-all border-b last:border-0 border-dashed border-gray-100">
                                        <span>{cat}</span>
                                        {i < 3 && <ArrowRight className="h-3 w-3 opacity-50" />}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Main Hero Slider (Col 6/12) */}
                    <div className="col-span-1 lg:col-span-6">
                        <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-lg overflow-hidden bg-[#F2F2F2] flex items-center p-8 md:p-12">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-multiply"></div>
                            {/* Circle Blob */}
                            <div className="absolute top-10 right-10 h-64 w-64 bg-primary/20 rounded-full blur-3xl"></div>

                            <div className="relative z-10 space-y-6 max-w-sm">
                                <span className="text-primary font-bold tracking-wider text-sm uppercase flex items-center gap-2">
                                    <span className="h-px w-8 bg-primary"></span> Weekend Deal
                                </span>
                                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-foreground">
                                    Fresh Fruit <br /> Collection
                                </h1>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-muted-foreground text-sm font-medium">Starting at</span>
                                    <span className="text-xl font-bold text-orange-500">$29.99</span>
                                </div>
                                <button className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25">
                                    Shop Now <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Banners (Col 3/12) */}
                    <div className="col-span-1 lg:col-span-3 flex flex-col gap-6">
                        {/* Banner 1 */}
                        <div className="relative h-full min-h-[240px] rounded-lg overflow-hidden bg-black flex flex-col justify-center p-6 text-white bg-[url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative z-10">
                                <span className="uppercase text-xs font-bold tracking-widest opacity-90 mb-2 block">Summer Sale</span>
                                <h3 className="text-2xl font-bold mb-4">75% OFF</h3>
                                <span className="text-sm font-medium opacity-80 mb-4 block">Only Fruit & Vegetable</span>
                                <button className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                                    Shop Now <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        {/* Banner 2 */}
                        <div className="relative h-full min-h-[240px] rounded-lg overflow-hidden bg-[#F7F7F7] flex flex-col justify-center p-6 items-center text-center">
                            <div className="space-y-2">
                                <span className="uppercase text-xs font-bold tracking-widest text-muted-foreground block">Best Deal</span>
                                <h3 className="text-xl font-bold text-foreground">Special Products <br /> Deal of the Month</h3>
                                <button className="pt-2 text-primary font-bold flex items-center gap-2 justify-center hover:gap-3 transition-all">
                                    Shop Now <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Features Bar */}
            <section className="container mx-auto px-4 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 border rounded-lg bg-card shadow-sm">
                    {[
                        { icon: Truck, title: "Free Shipping", desc: "Free shipping on all your order" },
                        { icon: Headphones, title: "Customer Support 24/7", desc: "Instant access to Support" },
                        { icon: ShieldCheck, title: "100% Secure Payment", desc: "We ensure your money is save" },
                        { icon: Package, title: "Money-Back Guarantee", desc: "30 Days Money-Back Guarantee" }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="h-12 w-12 shrink-0 rounded-full bg-background flex items-center justify-center text-primary border">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-foreground">{feature.title}</h4>
                                <p className="text-xs text-muted-foreground">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Today's Hot Sale */}
            <section className="container mx-auto px-4 mt-16">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Today's Hot Sale</h2>
                    <Link href="/shop" className="text-primary font-medium hover:underline flex items-center gap-1">
                        View All <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Hot Sale Banner (20% - 1 Col) */}
                    <div className="hidden lg:block lg:col-span-1 rounded-lg overflow-hidden relative h-full min-h-[400px] bg-black text-white p-6 flex flex-col items-center text-center">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563189037-3a95782a25df?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                        <div className="relative z-10 w-full h-full flex flex-col items-center">
                            <h3 className="text-2xl font-bold mb-4 mt-4">34% OFF</h3>
                            <p className="font-medium text-lg mb-8">Fruit Collection</p>

                            <div className="mt-auto mb-8 space-y-4 w-full">
                                <p className="text-sm opacity-90">Expired by</p>
                                <div className="flex justify-between gap-1 text-center">
                                    <div className="bg-white/20 backdrop-blur-sm rounded p-2 flex-1">
                                        <span className="font-bold text-lg block">02</span>
                                        <span className="text-[10px] uppercase">Days</span>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded p-2 flex-1">
                                        <span className="font-bold text-lg block">14</span>
                                        <span className="text-[10px] uppercase">Hrs</span>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded p-2 flex-1">
                                        <span className="font-bold text-lg block">35</span>
                                        <span className="text-[10px] uppercase">Min</span>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded p-2 flex-1">
                                        <span className="font-bold text-lg block">52</span>
                                        <span className="text-[10px] uppercase">Sec</span>
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all mt-4">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid (80% - 4 Cols) */}
                    <div className="col-span-1 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border-t border-l">
                        <div className="border-r border-b p-4"><ProductCard name="Green Apple" price={14.99} originalPrice={20.99} rating={5} image="/placeholder" category="Fruits" discount={50} /></div>
                        <div className="border-r border-b p-4"><ProductCard name="Fresh Indian Malta" price={20.00} rating={4} image="/placeholder" category="Fruits" /></div>
                        <div className="border-r border-b p-4"><ProductCard name="Chinese Cabbage" price={12.00} rating={5} image="/placeholder" category="Vegetables" isNew /></div>
                        <div className="border-r border-b p-4"><ProductCard name="Green Lettuce" price={9.00} rating={4} image="/placeholder" category="Vegetables" /></div>
                        <div className="border-r border-b p-4"><ProductCard name="Eggplant" price={34.00} rating={5} image="/placeholder" category="Vegetables" /></div>
                        <div className="border-r border-b p-4"><ProductCard name="Big Potatoes" price={20.00} rating={3} image="/placeholder" category="Vegetables" /></div>
                        <div className="border-r border-b p-4"><ProductCard name="Corn" price={12.00} rating={4} image="/placeholder" category="Vegetables" /></div>
                        <div className="border-r border-b p-4"><ProductCard name="Fresh Cauliflower" price={12.00} rating={5} image="/placeholder" category="Vegetables" /></div>
                    </div>
                </div>
            </section>

        </div>
    );

}

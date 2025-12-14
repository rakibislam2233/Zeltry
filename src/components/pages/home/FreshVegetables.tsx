import ProductCard from '@/components/common/ProductCard';
import { Product } from '@/components/shared/BrowseCategories';
import { ArrowRight } from 'lucide-react';
import React from 'react';
const products: Product[] = [
    {
        id: '5',
        category: 'Vegetables',
        name: 'Fresh Organic Carrots (1kg Bunch)',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAQ1o5TrQMR4Omk8VNLXbL42lpLQ_yq-QDrr_lFl8R1-qlrehwDtcM3rPHj0KjDCQZpiBI8c2vSR8OEBeABZ2fwQ24JUPkuyiGrINxe__ahBl0lviaediuViPAVwo43CPs5U5pswFL60ySiTJSSvOSKhoDI-t7sTBSDQCi_Vm0BE99RJ7OI0tdIXIYTP1okuFwffrYncSg1VdtxVVKXdvESgX20eH9QQMKXNz51zXAekf2JLOoO5PyWb5o7wChnJJdxbcWUNtTxnx3',
        rating: 5.0,
        price: 2.99
    },
    {
        id: '6',
        category: 'Vegetables',
        name: 'Green Bell Pepper (Each)',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg8LlpFfcR4zejaOavRfLzi0-24QtRk9fppYdqaOSikpcVlEtDmE-85iODdXYDalWB05rqpWrHKiv5ZhdhokZ4diOXVGIygqXyL7mYySoTxFl3ZZtxkMjed0Qijx_8EENjxd5yV6ltO57y1csPmVl_gDgW_8CW5He42ldN32iHaoZuGH2O8wNB8Akr9C3XUXtLlmKmkZriA3iJfpbyLdACvbozeUeO6hdEr1pTmIQs9K2gGylVxo1ctJ8ScCfbTJHaFXnD-JZXaD8Q',
        rating: 4.2,
        price: 1.20
    },
    {
        id: '7',
        category: 'Vegetables',
        name: 'Organic Broccoli Crown',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6mgV6lX8WChUELpHZiIAtgPXQR-QEZPaW32QPXH1Z53EZxJpR3dYVXHScH8kQNuZGsPolbREsh-pnaRonUotbXvWZWt0GIO-ClzRL_O1yVSk4JV9EWXj_Jb0_BSfoaYgsTqwjbm5_b95ORECD6M3KHq5tAxlQ1mGbFPgDymHDBYm2buecXkm5vmnBUmlGh49KeMAx7zl26uOSVUrP7XMSGqUWoMrD9rvm9O_1pJrodbko-9kLoZWKqO6BIv8i-wnXWpE-hpz-kRvZ',
        rating: 4.7,
        price: 3.15,
        badge: { text: 'FRESH', colorClass: 'bg-primary' }
    },
    {
        id: '8',
        category: 'Vegetables',
        name: 'Fresh Baby Spinach (200g Bag)',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHi-aEQHAAfU-Y430UFBx4S8IT5iGggbStf6KVuSTH0mroyH4E-Z2UA7nuxFaCg4EHqHuAp4UdDdeNSNqdUMTaR7AiN4mkFTnf3qj9WMCQzWT2Q_xczdM-q3uZ0igwybg2mtpVmRD5xlAyOjyvnTUINOMjzNaFhi9-Fgwe5Mu7yVmOa_dnbiS72_8qUcT0W6tcBjYqprhieUSRWZUEWab4izSTb0hovuw5mqoG4ZxRm29h2tqkUcVa8aIH4dJAljz366Fp3DEHPxFQ',
        rating: 4.9,
        price: 4.50
    }
];

const FreshVegetables: React.FC = () => {
    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <div className="relative">
                    <h2 className="text-xl md:text-2xl font-bold text-text-main dark:text-white">Fresh Vegetables</h2>
                    <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></div>
                </div>
                <a className="text-sm font-medium text-primary hover:underline flex items-center gap-1" href="#">
                    View All <ArrowRight className="w-4 h-4" />
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default FreshVegetables;
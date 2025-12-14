import ProductCard from '@/components/common/ProductCard';
import { Product } from '@/components/shared/BrowseCategories';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';

const products: Product[] = [
    {
        id: '1',
        category: 'Vegetables',
        name: 'Fresh Organic Avocado Hass (Kg)',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4bDAHC4b7UhmkO7nHgs2vjXZ6egKyv4IZCUP0MkH7vjcgd1cC8QHldltnUEO6MlNr4dXHibNB4RQuCo6yRd7P1GtjRzHpiqXxVKzr_vsOBodY_qSyASHz4W-zg4urN9781S_pH7TTOTSe0DfITyYSOs-c0epBdkrJrH_kaI8c0zjROsQqnjofaE-yNE1MV59WEW-U_V5xVEiYH_3qXPlgQSaF81DN0HUciwkA93D_MS6XDSNodbtzRSssU-guwikE_6JG6xijPJMr',
        rating: 4.5,
        price: 6.75,
        originalPrice: 8.99,
        badge: { text: '-25%', colorClass: 'bg-red-500' }
    },
    {
        id: '2',
        category: 'Vegetables',
        name: 'Organic Red Tomatoes (500g Pack)',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3wItrBNG9WQNDg8l-g9OvRuz8-32QB2o01TcZaygzgvcm14S0SaPUx3UIqnzE1WRo3FCV-MoAFqzUHkQezakuvyXtCgf7aY6mJVMijokZFfS3Xiy3C2UgPJ8q-ELa07bvl4EFumkEx8DGWsLbYji5IsL5nUBHjLMBWAJfEQ9Cvyw9oZZicaLW1aVql0PoOPV6vpyxKcXkN2bwKht2vL2SyCGrC-_pS0dI_UR1ZCnNbE0326U1Xb_Qnxqdli-G5WTUjy9Ur4O75bM0',
        rating: 4.0,
        price: 3.50,
        badge: { text: 'NEW', colorClass: 'bg-primary' }
    },
    {
        id: '3',
        category: 'Beverages',
        name: 'Almond Milk Unsweetened 1L',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj009NW9elke52BluwooeRjFWALNFUS4rLdpcm7z_T5Sb_LtoEx3F_VV8vJNAgCx0qnxC8M9RTBh2Ar32yHoPUQLp356G0y5cGEEx0HX-buj0BTkC93frdjO_5gpmUj5bJfNPcO8tc1fyPxlM18NF3jpQJauCCgDpfg8m0CJTIQuYDB_Rj4Le-1w0H0i8F-izrMcqw3b-DdRs_n-ogp3wd7luVelDtN3Y18I0sEsAnQPY1EBcpY5E43AsZ7nrsMYBgbnyEZjX1Cu7i',
        rating: 5.0,
        price: 4.99,
        originalPrice: 5.50
    },
    {
        id: '4',
        category: 'Dairy & Eggs',
        name: 'Farm Fresh White Eggs (Dozen)',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOsMPBJmBXVyjxBaQUMtK433I17BGabH0bPRHLsvlxFDZjAvzKm-3oYcbFz58uJY_cSCxsyiXXmX3ErKEl92dPtnqxfI2VgeG_z0W2uerIC-GqdVqijVz7fXrJw3aHHWlTOWBAYbUWjkDZBHythO-fwNycMXxuPkYk7vx5qRT6IBjIsqZ5qUmA-xvFjpqqkKVgfjUUoHisnQvX5hfFOOzjqR94P1Ezr9Ymz3Fzi02XlLPHtymW39MOwXVpo2K_bD1VzXDNRAECOfQs',
        rating: 3.8,
        price: 3.60,
        originalPrice: 4.00,
        badge: { text: '-10%', colorClass: 'bg-orange-500' }
    }
];

const TodayHotSale: React.FC = () => {
    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <div className="relative">
                    <h2 className="text-xl md:text-2xl font-bold text-text-main dark:text-white">Today's Hot Sale</h2>
                    <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></div>
                </div>
                <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default TodayHotSale;

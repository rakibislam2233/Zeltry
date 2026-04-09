import Breadcrumb from '@/components/shared/Breadcrumb';
import ProductDetailsTabs from './ProductDetailsTabs';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import RelatedProducts from './RelatedProducts';

const ProductDetailsPage = () => {
    return (
        <div className="w-full">
            <Breadcrumb items={[
                { label: 'Shop', href: '/shop' },
                { label: 'Snack', href: '/shop?category=snack' },
                { label: 'Seeds of Change Organic Quinoa, Brown' }
            ]} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-5 md:p-8 rounded-xl border border-[#e6ebf1]">
                <ProductGallery />
                <ProductInfo />
            </div>

            <ProductDetailsTabs />
            <RelatedProducts />
        </div>
    );
};

export default ProductDetailsPage;

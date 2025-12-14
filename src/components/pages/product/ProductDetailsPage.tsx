import Breadcrumb from '@/components/shared/Breadcrumb';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';

const ProductDetailsPage = () => {
    return (
        <div className="w-full">
            <Breadcrumb items={[
                { label: 'Shop', href: '/shop' },
                { label: 'Electronics', href: '/shop?category=electronics' },
                { label: 'Smart Watch' }
            ]} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-surface-light dark:bg-surface-dark p-6 md:p-10 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <ProductGallery />
                <ProductInfo />
            </div>

            {/* Description / Reviews Tabs Placeholder */}
            <div className="mt-12">
                <div className="flex items-center gap-8 border-b border-gray-200 dark:border-gray-700 mb-6">
                    <button className="pb-4 font-bold text-primary border-b-2 border-primary">Descriptions</button>
                    <button className="pb-4 font-medium text-text-muted hover:text-text-main transition-colors">Additional Information</button>
                    <button className="pb-4 font-medium text-text-muted hover:text-text-main transition-colors">Customer Feedback</button>
                </div>
                <div className="text-text-muted leading-relaxed space-y-4">
                    <p>
                        Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum eleifend. Donec pretium nibh enim, id elit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;

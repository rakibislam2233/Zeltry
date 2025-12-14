import Breadcrumb from '@/components/shared/Breadcrumb';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';

const CheckoutPage = () => {
    return (
        <div className="w-full">
            <Breadcrumb items={[{ label: 'Shop', href: '/shop' }, { label: 'Checkout' }]} />

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    <CheckoutForm />
                </div>
                <div className="w-full lg:w-[320px] shrink-0">
                    <OrderSummary />
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;

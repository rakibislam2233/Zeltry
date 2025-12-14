import Breadcrumb from '@/components/shared/Breadcrumb';
import CartTable from './CartTable';
import CartTotals from './CartTotals';

const CartPage = () => {
    return (
        <div className="w-full">
            <Breadcrumb items={[{ label: 'Shop', href: '/shop' }, { label: 'Shopping Cart' }]} />

            <h1 className="text-3xl font-bold text-center mb-8">My Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    <CartTable />
                </div>
                <div className="w-full lg:w-[320px] shrink-0">
                    <CartTotals />
                </div>
            </div>
        </div>
    );
};

export default CartPage;

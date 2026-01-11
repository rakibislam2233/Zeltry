import OrdersPage from '@/components/pages/dashboard/OrdersPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Orders | Zeltry',
    description: 'Track and manage your orders',
};

export default function Page() {
    return <OrdersPage />;
}

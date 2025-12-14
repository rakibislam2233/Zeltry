import OrdersPage from '@/components/pages/dashboard/OrdersPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Orders | Oryzn',
    description: 'Track and manage your orders',
};

export default function Page() {
    return <OrdersPage />;
}

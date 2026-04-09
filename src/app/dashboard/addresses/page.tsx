import AddressesPage from '@/components/pages/dashboard/AddressesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Addresses | Zeltry',
    description: 'Manage your shipping and billing addresses',
};

export default function Page() {
    return <AddressesPage />;
}

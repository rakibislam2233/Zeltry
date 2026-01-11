import AccountDetailsPage from '@/components/pages/dashboard/AccountDetailsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Account Settings | Zeltry',
    description: 'Update your personal information and password',
};

export default function Page() {
    return <AccountDetailsPage />;
}

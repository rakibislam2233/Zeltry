import WishlistPage from '@/components/pages/dashboard/WishlistPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Wishlist | Zeltry',
    description: 'View your wishlist items',
};

export default function Page() {
    return <WishlistPage />;
}

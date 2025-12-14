import LoginPage from '@/components/pages/auth/LoginPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login to your account | Oryzn',
    description: 'Welcome back! Please login to your account.',
};

export default function Page() {
    return <LoginPage />;
}

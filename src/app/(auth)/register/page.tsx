import RegisterPage from '@/components/pages/auth/RegisterPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create an Account | Oryzn',
    description: 'Join Oryzn to access premium features.',
};

export default function Page() {
    return <RegisterPage />;
}

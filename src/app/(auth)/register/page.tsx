import RegisterPage from '@/components/pages/auth/RegisterPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create an Account | Zeltry',
    description: 'Join Zeltry to access premium features.',
};

export default function Page() {
    return <RegisterPage />;
}

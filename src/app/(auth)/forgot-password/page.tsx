import ForgotPasswordPage from '@/components/pages/auth/ForgotPasswordPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Forgot Password | Oryzn',
    description: 'Reset your password.',
};

export default function Page() {
    return <ForgotPasswordPage />;
}

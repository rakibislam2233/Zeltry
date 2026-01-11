import ResetPasswordPage from '@/components/pages/auth/ResetPasswordPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Reset Password | Zeltry',
    description: 'Update your account password.',
};

export default function Page() {
    return <ResetPasswordPage />;
}

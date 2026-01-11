import VerifyEmailPage from '@/components/pages/auth/VerifyEmailPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Verify Email | Zeltry',
    description: 'Verify your email address.',
};

export default function Page() {
    return <VerifyEmailPage />;
}

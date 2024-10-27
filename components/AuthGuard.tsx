// components/AuthGuard.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { secureStorage } from '@/utils/secureStorage';

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        // Check authentication on client side
        if (!secureStorage.isAuthenticated()) {
            router.push('/signin');
            return;
        }

        // Optional: Check if token is expired
        const token = secureStorage.getAccessToken();
        if (token && secureStorage.isTokenExpired(token)) {
            secureStorage.clearAll();
            router.push('/signin');
        }
    }, [router]);

    return <>{children}</>;
}
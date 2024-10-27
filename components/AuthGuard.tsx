// components/AuthGuard.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { secureStorage } from '@/utils/secureStorage';

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (!secureStorage.isAuthenticated()) {
        router.push("/signin");
        return;
      }
      setIsLoading(false);
    }, [router]);

    if (isLoading) {
      return <div>Loading...</div>; // Or your loading component
    }

    return <>{children}</>;
}
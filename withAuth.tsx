import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/app/hooks/use-auth';

interface User {
  role: string;
  // Add other user properties as needed
}

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P & { user: User }>) => {
  return function AuthWrapper(props: P) {
    const { isAuthenticated, isLoading, user } = useAuth();
    const router = useRouter();
    const pathname = usePathname(); // Get the current pathname

    useEffect(() => {
      if (!isLoading) {
        if (!isAuthenticated) {
          router.push('/signin');
        } else if (user) {
          if (user.role === 'customer' && !pathname.startsWith('/dashboard')) {
            router.push('/dashboard');
          } else if (user.role === 'vendor' && !pathname.startsWith('/vendor')) {
            router.push('/vendor');
          }
        }
      }
    }, [isAuthenticated, isLoading, user, pathname, router]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} user={user as User} />;
  };
};

export default withAuth;

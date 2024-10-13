import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/hooks/use-auth';

const withAuth = (WrappedComponent) => {
  return function AuthWrapper(props) {
    const { isAuthenticated, isLoading, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading) {
        if (!isAuthenticated) {
          router.push('/signin'); // Redirect to signin if not authenticated
        } else if (user) {
          if (user.role === 'customer' && !router.pathname.startsWith('/dashboard')) {
            router.push('/dashboard');
          } else if (user.role === 'vendor' && !router.pathname.startsWith('/vendor')) {
            router.push('/vendor');
          }
        }
      }
    }, [isAuthenticated, isLoading, user, router]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
      return null; // or a custom unauthorized component
    }

    // Pass the user details to the wrapped component
    return <WrappedComponent {...props} user={user} />;
  };
};

export default withAuth;
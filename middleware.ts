import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Public paths that don't require authentication
  const publicPaths = ['/signin', '/signup', '/'];
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname);

  // Get the token from cookies
  const token = request.cookies.get('auth_tokens')?.value;
  const userRole = request.cookies.get('user_role')?.value; // Add cookie for user role

  // Redirect to signin if accessing protected route without token
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  // If user is authenticated, handle role-based routing
  if (token && !isPublicPath) {
    const isCustomerPath = request.nextUrl.pathname.startsWith('/dashboard');
    const isVendorPath = request.nextUrl.pathname.startsWith('/vendor');

    // Redirect customer trying to access vendor routes
    if (userRole === 'customer' && isVendorPath) {
      return NextResponse.redirect(new URL('/dashboard/home', request.url));
    }

    // Redirect vendor trying to access customer routes
    if (userRole === 'vendor' && isCustomerPath) {
      return NextResponse.redirect(new URL('/vendor/', request.url));
    }

    // Redirect users to their respective home pages if accessing root
    if (request.nextUrl.pathname === '/') {
      if (userRole === 'customer') {
        return NextResponse.redirect(new URL('/dashboard/home', request.url));
      }
      if (userRole === 'vendor') {
        return NextResponse.redirect(new URL('/vendor/', request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
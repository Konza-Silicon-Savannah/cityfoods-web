import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const response = await fetch('http://localhost:8000/accounts/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password 
      }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    console.log('Received data from backend:', data);

    if (!data.access || !data.refresh) {
      throw new Error('No tokens received from backend');
    }

    const res = NextResponse.json({ 
      message: 'Login successful', 
      success: true,
    }); 

    // Set HttpOnly cookies
    cookies().set('Bearer', data.access, {
      httpOnly: true,
    //   secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 30, // 30 minutes
      path: '/',
    });

    cookies().set('refreshToken', data.refresh, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    // Set user role in a separate, non-HttpOnly cookie
    if (data.user && data.user.role) {
      cookies().set('userRole', data.user.role, {
        httpOnly: false,
        // secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 15, // 15 minutes
        path: '/',
      });
    }

    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Login failed', success: false },
    { status: 401 });
  }
}
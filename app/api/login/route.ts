import { NextResponse } from 'next/server';

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
    console.log('Received tokens from backend:', data.token);

    if (!data.token) {
      throw new Error('No tokens received from backend');
    }

    const res = NextResponse.json({ 
      message: 'Login successful', 
      success: true,
      // Send tokens back to client for debugging
      user: data.user,
      token: data.token
    }); 

    // Set cookies
    res.cookies.set('authToken', data.token, {
      httpOnly: false,
      sameSite: 'strict',
      maxAge: 60 * 15, // 15 minutes
      path: '/',
    });

    // res.cookies.set('refreshToken', data.refresh, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === 'production',
    //   maxAge: 60 * 60 * 24 * 7, // 1 week
    //   path: '/',
    // });

    // Set user data cookie
    const userData = {
      role: data.user.role,
    };
    res.cookies.set('userData', JSON.stringify(userData), {
      httpOnly: false, // Allow client-side access
      sameSite: 'strict',
      maxAge: 60 * 15, // 15 minutes
      path: '/',
    });

    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Login failed', success: false }, { status: 401 });
  }
}
// File: app/api/logout/route.ts

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('authToken');

    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch('http://localhost:8000/accounts/api/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token.value}`
      },
    });

    if (!response.ok) {
      throw new Error('Logout failed');
    }

    // Create a response
    const res = NextResponse.json({ 
      message: 'Logout successful', 
      success: true 
    });

    // Clear the authToken cookie
    res.cookies.set('authToken', '', {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0, // This will expire the cookie immediately
      path: '/',
    });

    return res;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ message: 'Logout failed', success: false }, { status: 401 });
  }
}
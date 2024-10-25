// app/api/auth/user/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = cookies();
    const userCookie = cookieStore.get('user');
    
    if (!userCookie) {
      return NextResponse.json(
        { error: 'No authenticated user found' },
        { status: 401 }
      );
    }
    
    return NextResponse.json({
      user: userCookie.value, // This will be the user.id that was stored during login
    });
  } catch (error) {
    console.error('User retrieval error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve user' },
      { status: 500 }
    );
  }
}
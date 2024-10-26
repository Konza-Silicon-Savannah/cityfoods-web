// app/auth/auth/token/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('Bearer');
    
    if (!token) {
      return NextResponse.json(
        { error: 'No authentication token found' },
        { status: 401 }
      );
    }
    
    return NextResponse.json({
      accessToken: token.value,
    });
  } catch (error) {
    console.error('Token retrieval error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve token' },
      { status: 500 }
    );
  }
}
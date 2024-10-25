// routes.ts

import { NextResponse, NextRequest } from 'next/server';
import { getValidToken } from '@/app/lib/auth';

export async function GET(req: NextRequest) { // Accepting req as a parameter
  const token = await getValidToken(req); // Pass req to getValidToken

  if (token) {
    return NextResponse.json({ authenticated: true }, { status: 200 });
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}

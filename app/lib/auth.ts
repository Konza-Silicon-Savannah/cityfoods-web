// Updated getValidToken to take req as an argument
import { NextRequest } from 'next/server';
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number;
  // add other fields as needed
}

export function isTokenExpired(token: string): boolean {
  try {
    const decoded = jwtDecode(token) as DecodedToken;
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
}

// Modified to accept req as an argument
export async function getValidToken(req: NextRequest): Promise<string | null> {
  const token = req.cookies.get('authToken')?.value; // Access the token from cookies

  if (!token) {
    return null;
  }

  return token;
}

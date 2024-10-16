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
  const accessToken = req.cookies.get('Bearer')?.value;
  const refreshToken = req.cookies.get('refreshToken')?.value;

  if (!accessToken) {
    return null;
  }

  if (!isTokenExpired(accessToken)) {
    return accessToken;
  }

  if (refreshToken && !isTokenExpired(refreshToken)) {
    try {
      const response = await fetch('http://localhost:8000/accounts/api/token/refresh/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: refreshToken}),
      });
      
      if(response.ok) {
        const data = await response.json();
        // In a real scenario, you'd update the cookie here. For this we'll just return the new token.
        return data.access;
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  }

  return null;
}

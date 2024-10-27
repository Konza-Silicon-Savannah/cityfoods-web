// utils/secureStorage.ts
import { AES, enc } from 'crypto-js';

// Type definitions for stored data
interface AuthTokens {
  access: string;
  refresh: string;
}

interface User {
  id: number;
  email: string;
  role: string;
  // Add other user properties as needed
}

class SecureStorage {
  private readonly SECRET_KEY: string;

  constructor() {
    // In production, this should be an environment variable
    this.SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || 'your-fallback-secret-key';
  }

  // Encrypt data before storing
  private encrypt(data: string): string {
    return AES.encrypt(data, this.SECRET_KEY).toString();
  }

  // Decrypt data after retrieving
  private decrypt(encryptedData: string): string {
    try {
      const bytes = AES.decrypt(encryptedData, this.SECRET_KEY);
      return bytes.toString(enc.Utf8);
    } catch (error) {
      this.clearAll();
      console.log('Clearing data deryption failed', error);
      throw new Error('Decryption failed - possible tampering detected');
    }
  }

  // Store tokens securely
  setTokens(tokens: AuthTokens): void {
    try {
      const encryptedTokens = this.encrypt(JSON.stringify(tokens));
      localStorage.setItem('auth_tokens', encryptedTokens);
    } catch (error) {
      console.log('Error storing tokens', error);
      throw new Error('Failed to store tokens securely');
    }
  }

  // Retrieve tokens
  getTokens(): AuthTokens | null {
    try {
      const encryptedTokens = localStorage.getItem('auth_tokens');
      if (!encryptedTokens) return null;

      const decryptedTokens = this.decrypt(encryptedTokens);
      return JSON.parse(decryptedTokens);
    } catch (error) {
      this.clearAll();
      console.log('Error retrieving tokens', error);
      return null;
    }
  }

  // Store user data securely
  setUser(user: User): void {
    try {
      const encryptedUser = this.encrypt(JSON.stringify(user));
      localStorage.setItem('user_data', encryptedUser);
    } catch (error) {
      console.log('Error storing user data', error);
      throw new Error('Failed to store user data securely');
    }
  }

  // Retrieve user data
  getUser(): User | null {
    try {
      const encryptedUser = localStorage.getItem('user_data');
      if (!encryptedUser) return null;

      const decryptedUser = this.decrypt(encryptedUser);
      return JSON.parse(decryptedUser);
    } catch (error) {
      this.clearAll();
      console.log('Error fetching user data', error);
      return null;
    }
  }

  // Get access token for API calls
  getAccessToken(): string | null {
    const tokens = this.getTokens();
    return tokens?.access || null;
  }

  // Get refresh token for token renewal
  getRefreshToken(): string | null {
    const tokens = this.getTokens();
    return tokens?.refresh || null;
  }

  // Clear all auth-related data
  clearAll(): void {
    localStorage.removeItem('auth_tokens');
    localStorage.removeItem('user_data');
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  // Utility to check token expiration
  isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = payload.exp * 1000; // Convert to milliseconds
      return Date.now() >= expirationTime;
    } catch {
      return true;
    }
  }
}

// Export a singleton instance
export const secureStorage = new SecureStorage();
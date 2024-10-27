// utils/secureStorage.ts
import { AES, enc } from 'crypto-js';

interface AuthTokens {
  access: string;
  refresh: string;
}

interface User {
  id: number;
  email: string;
  role: string;
}

class SecureStorage {
  private readonly SECRET_KEY: string;

  constructor() {
    this.SECRET_KEY = process.env.NEXT_PUBLIC_STORAGE_KEY || 'your-fallback-secret-key';
  }

  // Check if we're in a browser environment
  private isClient(): boolean {
    return typeof window !== 'undefined';
  }

  // Safely access localStorage
  private getStorage(): Storage | null {
    if (this.isClient()) {
      return window.localStorage;
    }
    return null;
  }

  private encrypt(data: string): string {
    return AES.encrypt(data, this.SECRET_KEY).toString();
  }

  private decrypt(encryptedData: string): string {
    try {
      const bytes = AES.decrypt(encryptedData, this.SECRET_KEY);
      return bytes.toString(enc.Utf8);
    } catch (error) {
      this.clearAll();
      console.log('decryption failed', error);
      throw new Error('Decryption failed - possible tampering detected');
    }
  }

  setTokens(tokens: AuthTokens): void {
    const storage = this.getStorage();
    if (!storage) return;

    try {
      const encryptedTokens = this.encrypt(JSON.stringify(tokens));
      storage.setItem('auth_tokens', encryptedTokens);
    } catch (error) {
      console.log('Error storing tokens', error);
      throw new Error('Failed to store tokens securely');
    }
  }

  getTokens(): AuthTokens | null {
    const storage = this.getStorage();
    if (!storage) return null;

    try {
      const encryptedTokens = storage.getItem('auth_tokens');
      if (!encryptedTokens) return null;

      const decryptedTokens = this.decrypt(encryptedTokens);
      return JSON.parse(decryptedTokens);
    } catch (error) {
      this.clearAll();
      console.log('Failed to retrieve tokens', error);
      return null;
    }
  }

  setUser(user: User): void {
    const storage = this.getStorage();
    if (!storage) return;

    try {
      const encryptedUser = this.encrypt(JSON.stringify(user));
      storage.setItem('user_data', encryptedUser);
    } catch (error) {
      console.log('Error storing user data',error);
      throw new Error('Failed to store user data securely');
    }
  }

  getUser(): User | null {
    const storage = this.getStorage();
    if (!storage) return null;

    try {
      const encryptedUser = storage.getItem('user_data');
      if (!encryptedUser) return null;

      const decryptedUser = this.decrypt(encryptedUser);
      return JSON.parse(decryptedUser);
    } catch (error) {
      this.clearAll();
      console.log('clearing data decryption failed', error);
      return null;
    }
  }

  getAccessToken(): string | null {
    const tokens = this.getTokens();
    return tokens?.access || null;
  }

  getRefreshToken(): string | null {
    const tokens = this.getTokens();
    return tokens?.refresh || null;
  }

  clearAll(): void {
    const storage = this.getStorage();
    if (!storage) return;

    storage.removeItem('auth_tokens');
    storage.removeItem('user_data');
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = payload.exp * 1000;
      return Date.now() >= expirationTime;
    } catch {
      return true;
    }
  }
}

export const secureStorage = new SecureStorage();
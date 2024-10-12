// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = async (credentials) => {
    const response = await fetch('http://localhost:8000/accounts/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data.user); // Adjust based on your API response
      localStorage.setItem('token', data.token); // Store token for further requests
    } else {
      // Handle errors
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    router.push('/login'); // Redirect to login page
  };

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    if (token) {
      // Optionally verify token validity
      setUser({ token }); // Set user state based on token
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};


import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  username: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const defaultAuthContext: AuthContextType = {
  user: null,
  login: () => false,
  logout: () => {},
  isAuthenticated: false,
  isAdmin: false,
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Verificar si hay un usuario guardado en localStorage al cargar
  useEffect(() => {
    const storedUser = localStorage.getItem('insight-user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Error parsing stored user:', e);
        localStorage.removeItem('insight-user');
      }
    }
  }, []);

  // Función simple de login - en producción usarías un backend real
  const login = (username: string, password: string): boolean => {
    // En un entorno real esto se haría contra un backend seguro
    // Usando las nuevas credenciales: usuario: cpena y password: Merida12345
    if (username === 'cpena' && password === 'Merida12345') {
      const newUser = { username, isAdmin: true };
      setUser(newUser);
      localStorage.setItem('insight-user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('insight-user');
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.isAdmin || false;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

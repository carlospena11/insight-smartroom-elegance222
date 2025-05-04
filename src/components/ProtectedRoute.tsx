
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { isAuthenticated, isAdmin } = useAuth();
  const location = useLocation();

  // Si necesitamos permisos de administrador y el usuario no los tiene, redirigir al login
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si necesitamos autenticación y el usuario no está autenticado, redirigir al login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si el usuario está autenticado y tiene los permisos necesarios, mostrar el contenido protegido
  return <>{children}</>;
};

export default ProtectedRoute;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { ImageManager, siteImages } from "./ImageManager";
import { Wrench, LogIn, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "AI Agents", href: "/ai-agents" },
  { label: "Características", href: "/#features" },
  { label: "Experiencia", href: "/#guest-experience" },
  { label: "Nosotros", href: "/#about" },
  { label: "Contacto", href: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const mobile = useIsMobile();
  const { isAuthenticated, isAdmin, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente",
    });
    navigate("/");
  };

  const handleAdminClick = () => {
    navigate("/admin/cms");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <ImageManager
            src={siteImages.logo}
            alt="Smart Room Logo"
            className="h-auto w-auto max-h-[44px]" 
            width="71.5%"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link key={item.label} to={item.href} className="nav-link px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              {item.label}
            </Link>
          ))}
          
          {/* Admin panel access icon */}
          <Button 
            variant="outline" 
            size="sm" 
            className="ml-2 flex items-center gap-2"
            onClick={handleAdminClick}
          >
            <Wrench size={18} className="text-gray-700" />
            <span className="hidden xl:inline">Administración</span>
          </Button>
          
          {/* Login/Logout button - Only show if authenticated */}
          {isAuthenticated && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="ml-2 flex items-center gap-2"
              onClick={handleLogout}
            >
              <LogOut size={18} />
              <span className="hidden xl:inline">Salir</span>
            </Button>
          )}
        </nav>

        {/* Mobile Navigation Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] sm:w-[350px]">
            <nav className="flex flex-col gap-4 mt-12">
              {navItems.map((item) => (
                <SheetClose asChild key={item.label}>
                  <Link to={item.href} className="flex items-center gap-3 py-2 px-4 rounded-md hover:bg-muted transition-colors">
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
              
              {/* Admin link in mobile menu */}
              <SheetClose asChild>
                <Link to="/admin/cms" className="flex items-center gap-3 py-2 px-4 rounded-md hover:bg-muted transition-colors">
                  <Wrench size={20} />
                  <span>Administración</span>
                </Link>
              </SheetClose>
              
              {/* Logout button in mobile menu - Only show if authenticated */}
              {isAuthenticated && (
                <SheetClose asChild>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center gap-3 py-2 px-4 rounded-md hover:bg-muted transition-colors"
                  >
                    <LogOut size={20} />
                    <span>Cerrar Sesión</span>
                  </button>
                </SheetClose>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;

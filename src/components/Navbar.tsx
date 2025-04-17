
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-semibold">
            <span className="text-insight-dark">&lt;</span>
            <span className="text-insight-dark">insight</span>
            <span className="text-insight-red">.</span>
            <span className="text-insight-green">/&gt;</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-insight-dark hover:text-insight-green transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="text-insight-dark hover:text-insight-green transition-colors">
            Servicios
          </a>
          <a href="#caracteristicas" className="text-insight-dark hover:text-insight-green transition-colors">
            Características
          </a>
          <a href="#compatibilidad" className="text-insight-dark hover:text-insight-green transition-colors">
            Compatibilidad
          </a>
          <a href="#nosotros" className="text-insight-dark hover:text-insight-green transition-colors">
            Nosotros
          </a>
          <a href="#contacto" className="text-insight-dark hover:text-insight-green transition-colors">
            Contacto
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-insight-dark" />
            ) : (
              <Menu className="h-6 w-6 text-insight-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <a 
              href="#inicio" 
              className="text-insight-dark hover:text-insight-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className="text-insight-dark hover:text-insight-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#caracteristicas" 
              className="text-insight-dark hover:text-insight-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Características
            </a>
            <a 
              href="#compatibilidad" 
              className="text-insight-dark hover:text-insight-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Compatibilidad
            </a>
            <a 
              href="#nosotros" 
              className="text-insight-dark hover:text-insight-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className="text-insight-dark hover:text-insight-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

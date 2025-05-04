
import { useState, useEffect } from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

/**
 * Componente para gestionar imágenes con fallback y carga optimizada
 * Útil para cambiar imágenes fácilmente en todo el sitio
 */
export const ImageManager = ({ src, alt, className, fallbackSrc = "/placeholder.svg" }: ImageProps) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    // Reset states when src changes
    setImgSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
    setImgSrc(fallbackSrc);
  };

  return (
    <div className={`relative ${isLoading ? 'bg-gray-200 animate-pulse' : ''}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-insight-green border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
      {hasError && (
        <div className="absolute bottom-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Error de carga
        </div>
      )}
    </div>
  );
};

/**
 * Función para obtener la URL de una imagen
 * Centraliza la gestión de rutas de imágenes
 */
export const getImageUrl = (imageName: string): string => {
  // Puedes personalizar esta función para manejar diferentes entornos
  // Por ejemplo, usar una CDN en producción
  const isProduction = window.location.hostname !== "localhost";
  
  // Imágenes alojadas en lovable-uploads
  if (imageName.includes("lovable-uploads")) {
    return isProduction 
      ? `/${imageName}` // En producción
      : `/${imageName}`; // En desarrollo
  }
  
  // Otras imágenes
  return isProduction 
    ? `/${imageName}` // En producción
    : `/${imageName}`; // En desarrollo
};

// Mapa centralizado original de todas las imágenes del sitio
export const defaultSiteImages = {
  hero: "/lovable-uploads/c945a5a8-5382-4f39-8400-1511bec5245e.png",
  aiAgent: "/lovable-uploads/8d49e4e4-4a6c-48ee-a777-a5f0f398987b.png",
  guestExperience: "/lovable-uploads/4827b0f3-267c-4c28-b450-53935fa9aeca.png",
  smartRoom: "/lovable-uploads/d910afa8-d8a5-4cee-83d3-4cd37e6a3997.png",
  compatibility: "/lovable-uploads/27a90f52-eb00-4ffd-baf1-e4fe55ae9d2a.png",
  logo: "/lovable-uploads/305d1918-687d-49de-87c7-9c047174a823.png",
  aboutUs: "/lovable-uploads/1eaa6c24-f8b6-43b8-bcdd-0ceab0cfd71a.png",
};

// Función para cargar imágenes desde localStorage si existen
const loadImagesFromStorage = () => {
  try {
    const savedImages = localStorage.getItem("insight-cms-images");
    if (savedImages) {
      return JSON.parse(savedImages);
    }
  } catch (error) {
    console.error("Error cargando imágenes desde localStorage:", error);
  }
  return defaultSiteImages;
};

// Exportar las imágenes cargadas (desde localStorage o valores predeterminados)
export const siteImages = loadImagesFromStorage();

export default ImageManager;

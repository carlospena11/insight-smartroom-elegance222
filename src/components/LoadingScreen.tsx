
import { useState, useEffect } from "react";
import { ImageManager, siteImages } from "./ImageManager";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="mb-6">
          <img 
            src={siteImages.logo} 
            alt="Adirem Logo" 
            className="h-16 w-auto"
          />
        </div>
        
        <div className="relative w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-adirem-green rounded-full animate-pulse"></div>
          <div className="absolute top-0 left-0 h-full w-1/3 bg-adirem-green rounded-full animate-[loader_2s_linear_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;


import React, { useState, useEffect } from "react";
import { ImageManager, siteImages, defaultSiteImages } from "./ImageManager";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Upload, Image as ImageIcon, RefreshCw } from "lucide-react";

const LogoEditor = () => {
  const [logoUrl, setLogoUrl] = useState(siteImages.companyLogo);
  const [originalLogoUrl, setOriginalLogoUrl] = useState(siteImages.companyLogo);
  const [previewUrl, setPreviewUrl] = useState(siteImages.companyLogo);
  const [logoDetails, setLogoDetails] = useState<{ format: string; size: string }>({ format: '', size: '' });
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Cargar detalles del logo al iniciar
  useEffect(() => {
    fetchLogoDetails();
  }, []);

  const fetchLogoDetails = async () => {
    try {
      const response = await fetch(logoUrl);
      
      if (response.ok) {
        const blob = await response.blob();
        const format = blob.type.split('/')[1] || 'desconocido';
        const size = (blob.size / 1024).toFixed(2) + ' KB';
        
        setLogoDetails({ format, size });
      }
    } catch (error) {
      console.error("Error obteniendo detalles del logo:", error);
    }
  };

  const handleLogoUrlChange = (newUrl: string) => {
    setLogoUrl(newUrl);
    setPreviewUrl(newUrl);
  };

  // Manejar la subida de imágenes
  const handleLogoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validar tipo y tamaño de archivo
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Formato no soportado",
        description: "Por favor, sube una imagen en formato PNG, JPEG, GIF, WEBP o SVG",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 2 * 1024 * 1024) { // 2MB límite para el logo
      toast({
        title: "Imagen demasiado grande",
        description: "El tamaño máximo permitido para el logo es 2MB",
        variant: "destructive",
      });
      return;
    }

    // Convertir archivo a URL de datos
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        handleLogoUrlChange(result);
        
        // Actualizar detalles de la imagen
        const format = file.type.split('/')[1] || 'desconocido';
        const size = (file.size / 1024).toFixed(2) + ' KB';
        
        setLogoDetails({ format, size });
        
        toast({
          title: "Logo cargado",
          description: `El logo ha sido actualizado. No olvides guardar los cambios.`,
        });
      }
    };
    reader.readAsDataURL(file);
  };

  // Aplicar cambios
  const applyChanges = () => {
    // Obtener las imágenes actuales
    const currentImages = JSON.parse(localStorage.getItem("insight-cms-images") || JSON.stringify(defaultSiteImages));
    
    // Actualizar solo el logo
    const updatedImages = {
      ...currentImages,
      companyLogo: logoUrl
    };
    
    // Guardar en localStorage
    localStorage.setItem("insight-cms-images", JSON.stringify(updatedImages));
    
    // Actualizar estado original
    setOriginalLogoUrl(logoUrl);
    
    toast({
      title: "Logo actualizado",
      description: "El logo se ha actualizado correctamente",
    });
    
    // Forzar recarga para aplicar cambios
    setTimeout(() => window.location.reload(), 1000);
  };

  // Restablecer a valor original
  const resetLogo = () => {
    setLogoUrl(defaultSiteImages.companyLogo);
    setPreviewUrl(defaultSiteImages.companyLogo);
    toast({
      title: "Logo restablecido",
      description: "Se ha restaurado el logo original",
      variant: "destructive",
    });
  };

  const discardChanges = () => {
    setLogoUrl(originalLogoUrl);
    setPreviewUrl(originalLogoUrl);
    toast({
      description: "Cambios descartados",
    });
  };

  // Verificar si hay cambios pendientes
  const hasChanges = logoUrl !== originalLogoUrl;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-insight-dark mb-2">Editor de Logo</h2>
        <p className="text-gray-600 mb-4">
          Personaliza el logo de tu sitio web. El logo aparece en la barra de navegación y en el pie de página.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Preview section */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Vista Previa</CardTitle>
              <CardDescription>Así se verá el logo en tu sitio web</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4 w-full">
                <div className="flex items-center">
                  <ImageManager
                    src={previewUrl}
                    alt="Logo Preview"
                    className="h-18 w-auto" /* Increased size by 50% from h-12 to h-18 */
                  />
                  <span className="ml-3 text-xl font-semibold text-gray-800">Smart Room</span>
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg shadow-sm w-full">
                <div className="flex items-center">
                  <ImageManager
                    src={previewUrl}
                    alt="Logo Preview"
                    className="h-15 w-auto" /* Increased size by 50% from h-10 to h-15 */
                  />
                  <span className="ml-3 text-lg font-medium text-white">Smart Room</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Editor section */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Editar Logo</CardTitle>
              <CardDescription>Sube un nuevo logo o modifica el actual</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div 
                className="mb-4 h-48 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center"
              >
                <ImageManager 
                  src={logoUrl} 
                  alt="Logo actual" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {logoDetails && (
                <div className="text-sm text-gray-500 flex justify-between">
                  <span>Formato: {logoDetails.format}</span>
                  <span>Tamaño: {logoDetails.size}</span>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="logo-url">URL del logo</Label>
                <Input 
                  id="logo-url" 
                  value={logoUrl} 
                  onChange={(e) => handleLogoUrlChange(e.target.value)}
                  className="text-xs"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="upload-logo">Subir nuevo logo</Label>
                <div className="flex">
                  <Label 
                    htmlFor="upload-logo"
                    className="cursor-pointer flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 rounded-md w-full"
                  >
                    <Upload size={16} />
                    <span>Seleccionar archivo</span>
                    <Input 
                      id="upload-logo"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleLogoUpload}
                    />
                  </Label>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-md">
                <p className="text-sm text-amber-800">
                  <strong>Recomendaciones:</strong>
                </p>
                <ul className="text-xs text-amber-700 mt-2 list-disc list-inside">
                  <li>Usa un logo con fondo transparente (PNG o SVG)</li>
                  <li>Tamaño recomendado: 200x60 pixeles</li>
                  <li>Formato preferido: SVG o PNG</li>
                  <li>Tamaño máximo: 2MB</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <div className="flex gap-3 w-full">
                <Button 
                  onClick={applyChanges} 
                  className="w-full bg-insight-green hover:bg-insight-green/90"
                  disabled={!hasChanges}
                >
                  Guardar cambios
                </Button>
                <Button 
                  variant="outline" 
                  onClick={discardChanges}
                  disabled={!hasChanges}
                  className="w-full"
                >
                  Descartar
                </Button>
              </div>
              <Button 
                variant="ghost" 
                onClick={resetLogo}
                className="w-full text-destructive hover:text-destructive"
              >
                Restablecer logo original
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LogoEditor;

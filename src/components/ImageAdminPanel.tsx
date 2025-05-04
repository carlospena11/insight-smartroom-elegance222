
import React, { useState, useEffect } from "react";
import { ImageManager, siteImages, defaultSiteImages } from "./ImageManager";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Upload, Image as ImageIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ImageAdminPanel = () => {
  // Estado para almacenar las rutas de imágenes actualizadas
  const [imageUrls, setImageUrls] = useState({ ...siteImages });
  const [imageDetails, setImageDetails] = useState<Record<string, { format: string; size: string }>>({});
  const [selectedImageKey, setSelectedImageKey] = useState<string | null>(null);

  useEffect(() => {
    // Obtener detalles de las imágenes al cargar
    const fetchImageDetails = async () => {
      const details: Record<string, { format: string; size: string }> = {};
      
      for (const [key, url] of Object.entries(imageUrls)) {
        try {
          const response = await fetch(url);
          
          if (response.ok) {
            const blob = await response.blob();
            const format = blob.type.split('/')[1] || 'desconocido';
            const size = (blob.size / 1024).toFixed(2) + ' KB';
            
            details[key] = { format, size };
          }
        } catch (error) {
          console.error(`Error obteniendo detalles de la imagen ${key}:`, error);
        }
      }
      
      setImageDetails(details);
    };
    
    fetchImageDetails();
  }, [imageUrls]);

  // Manejar cambios en los inputs
  const handleImageUrlChange = (imageKey: string, newUrl: string) => {
    setImageUrls(prev => ({
      ...prev,
      [imageKey]: newUrl
    }));
  };

  // Aplicar cambios (en un entorno real, esto guardaría en backend)
  const applyChanges = () => {
    localStorage.setItem("insight-cms-images", JSON.stringify(imageUrls));
    
    toast({
      title: "Cambios guardados",
      description: "Los cambios se han guardado en el almacenamiento local del navegador",
    });
    
    // Forzar recarga para aplicar cambios
    setTimeout(() => window.location.reload(), 1000);
  };

  // Restablecer a valores originales
  const resetChanges = () => {
    setImageUrls({ ...siteImages });
    toast({
      title: "Cambios restablecidos",
      description: "Se han restaurado las imágenes originales",
      variant: "destructive",
    });
  };

  // Manejar la subida de imágenes
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>, imageKey: string) => {
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

    if (file.size > 5 * 1024 * 1024) { // 5MB límite
      toast({
        title: "Imagen demasiado grande",
        description: "El tamaño máximo permitido es 5MB",
        variant: "destructive",
      });
      return;
    }

    // Convertir archivo a URL de datos
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        handleImageUrlChange(imageKey, result);
        
        // Actualizar detalles de la imagen
        const format = file.type.split('/')[1] || 'desconocido';
        const size = (file.size / 1024).toFixed(2) + ' KB';
        
        setImageDetails(prev => ({
          ...prev,
          [imageKey]: { format, size }
        }));
        
        toast({
          title: "Imagen cargada",
          description: `La imagen ${imageKey} ha sido actualizada. No olvides guardar los cambios.`,
        });
      }
    };
    reader.readAsDataURL(file);
  };

  // Mostrar imagen en tamaño completo
  const showFullImage = (imageKey: string) => {
    setSelectedImageKey(imageKey);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-insight-dark mb-2">Panel de Administración de Imágenes</h1>
        <p className="text-gray-600">
          Administra todas las imágenes de tu sitio desde un único lugar. 
          Los cambios se guardarán en el almacenamiento local del navegador.
        </p>
        
        <div className="flex gap-4 mt-6">
          <Button onClick={applyChanges} className="bg-insight-green hover:bg-insight-green/90">
            Guardar Cambios
          </Button>
          <Button variant="outline" onClick={resetChanges}>
            Restablecer Valores Originales
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(imageUrls).map(([key, url]) => (
          <Card key={key} className="overflow-hidden">
            <CardHeader className="bg-muted pb-2">
              <CardTitle className="text-lg">{key}</CardTitle>
              <CardDescription>ID: {key}</CardDescription>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div 
                className="mb-4 h-48 overflow-hidden rounded-md bg-gray-100 cursor-pointer relative group"
                onClick={() => showFullImage(key)}
              >
                <ImageManager 
                  src={imageUrls[key]} 
                  alt={`Imagen ${key}`} 
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <ImageIcon className="text-white w-8 h-8" />
                </div>
              </div>
              
              <div className="space-y-4">
                {imageDetails[key] && (
                  <div className="text-sm text-gray-500 flex justify-between">
                    <span>Formato: {imageDetails[key].format}</span>
                    <span>Tamaño: {imageDetails[key].size}</span>
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor={`image-${key}`}>URL de la imagen</Label>
                  <Input 
                    id={`image-${key}`} 
                    value={imageUrls[key]} 
                    onChange={(e) => handleImageUrlChange(key, e.target.value)}
                    className="text-xs"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`upload-${key}`}>Subir nueva imagen</Label>
                  <div className="flex">
                    <Label 
                      htmlFor={`upload-${key}`}
                      className="cursor-pointer flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 rounded-md w-full"
                    >
                      <Upload size={16} />
                      <span>Seleccionar archivo</span>
                      <Input 
                        id={`upload-${key}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, key)}
                      />
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between">
              <p className="text-xs text-gray-500">
                {imageUrls[key] === defaultSiteImages[key] ? "Original" : "Modificada"}
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleImageUrlChange(key, defaultSiteImages[key])}
                disabled={imageUrls[key] === defaultSiteImages[key]}
              >
                Restaurar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Dialog para mostrar imagen en tamaño completo */}
      <Dialog open={!!selectedImageKey} onOpenChange={(open) => !open && setSelectedImageKey(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedImageKey}</DialogTitle>
          </DialogHeader>
          <div className="h-[60vh] w-full flex items-center justify-center">
            {selectedImageKey && (
              <ImageManager 
                src={imageUrls[selectedImageKey]} 
                alt={selectedImageKey} 
                className="max-h-full max-w-full object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageAdminPanel;


import React, { useState } from "react";
import { ImageManager, siteImages } from "./ImageManager";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
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

  // Manejar cambios en los inputs
  const handleImageUrlChange = (imageKey: string, newUrl: string) => {
    setImageUrls(prev => ({
      ...prev,
      [imageKey]: newUrl
    }));
  };

  // Aplicar cambios (en un entorno real, esto guardaría en backend)
  const applyChanges = () => {
    // En una aplicación real, aquí enviarías los cambios a un backend
    // Por ahora, mostramos un toast y guardamos en localStorage para demostración
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
              <div className="mb-4 h-48 overflow-hidden rounded-md bg-gray-100">
                <ImageManager 
                  src={imageUrls[key]} 
                  alt={`Imagen ${key}`} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor={`image-${key}`}>URL de la imagen</Label>
                <Input 
                  id={`image-${key}`} 
                  value={imageUrls[key]} 
                  onChange={(e) => handleImageUrlChange(key, e.target.value)}
                  className="text-xs"
                />
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between">
              <p className="text-xs text-gray-500">
                {imageUrls[key] === siteImages[key] ? "Original" : "Modificada"}
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleImageUrlChange(key, siteImages[key])}
                disabled={imageUrls[key] === siteImages[key]}
              >
                Restaurar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ImageAdminPanel;

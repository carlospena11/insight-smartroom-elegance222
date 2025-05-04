
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageAdminPanel from "@/components/ImageAdminPanel";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import LogoEditor from "@/components/LogoEditor";
import ContactInfoEditor from "@/components/ContactInfoEditor";
import { useToast } from "@/hooks/use-toast";

const AdminCMS = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("images");
  const { toast } = useToast();
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    let tabName = "Imágenes";
    if (value === "logo") tabName = "Logo";
    if (value === "contact") tabName = "Contacto";

    toast({
      title: `Pestaña cambiada`,
      description: `Ahora estás en la sección de ${tabName}`,
    });
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-4 flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Button>
          
          <h1 className="text-3xl font-bold text-insight-dark mb-6">Panel de Administración</h1>
          
          <Tabs defaultValue="images" value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="images">Imágenes del Sitio</TabsTrigger>
              <TabsTrigger value="logo">Logo</TabsTrigger>
              <TabsTrigger value="contact">Contacto y Redes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="images">
              <ImageAdminPanel />
            </TabsContent>
            
            <TabsContent value="logo">
              <LogoEditor />
            </TabsContent>

            <TabsContent value="contact">
              <ContactInfoEditor />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminCMS;

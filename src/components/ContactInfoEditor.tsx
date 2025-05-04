
import React, { useState, useEffect } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Save, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Schema for contact information
const contactFormSchema = z.object({
  email: z.string().email("Correo inválido"),
  phone: z.string().min(1, "El teléfono es requerido"),
  address: z.string().min(1, "La dirección es requerida"),
});

// Schema for social media links
const socialFormSchema = z.object({
  facebook: z.string().url("URL de Facebook inválida").or(z.literal("")),
  twitter: z.string().url("URL de Twitter inválida").or(z.literal("")),
  instagram: z.string().url("URL de Instagram inválida").or(z.literal("")),
  linkedin: z.string().url("URL de LinkedIn inválida").or(z.literal("")),
  youtube: z.string().url("URL de YouTube inválida").or(z.literal("")),
});

// Default contact information
const defaultContactInfo = {
  email: "info@insight-smartroom.com",
  phone: "+123 456 7890",
  address: "Avenida Principal 123, Ciudad",
};

// Default social media links
const defaultSocialLinks = {
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
};

const ContactInfoEditor = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("contact");
  
  // Contact form
  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: loadContactInfo(),
  });
  
  // Social media form
  const socialForm = useForm<z.infer<typeof socialFormSchema>>({
    resolver: zodResolver(socialFormSchema),
    defaultValues: loadSocialLinks(),
  });
  
  // Load contact information from localStorage or use default values
  function loadContactInfo() {
    try {
      const savedContactInfo = localStorage.getItem("insight-contact-info");
      if (savedContactInfo) {
        return JSON.parse(savedContactInfo);
      }
    } catch (error) {
      console.error("Error loading contact info:", error);
    }
    return defaultContactInfo;
  }
  
  // Load social media links from localStorage or use default values
  function loadSocialLinks() {
    try {
      const savedSocialLinks = localStorage.getItem("insight-social-links");
      if (savedSocialLinks) {
        return JSON.parse(savedSocialLinks);
      }
    } catch (error) {
      console.error("Error loading social links:", error);
    }
    return defaultSocialLinks;
  }
  
  // Save contact information
  const saveContactInfo = (data: z.infer<typeof contactFormSchema>) => {
    try {
      localStorage.setItem("insight-contact-info", JSON.stringify(data));
      toast({
        title: "Información de contacto guardada",
        description: "Los cambios han sido guardados correctamente",
      });
    } catch (error) {
      console.error("Error saving contact info:", error);
      toast({
        title: "Error al guardar",
        description: "Hubo un problema al guardar la información",
        variant: "destructive",
      });
    }
  };
  
  // Save social media links
  const saveSocialLinks = (data: z.infer<typeof socialFormSchema>) => {
    try {
      localStorage.setItem("insight-social-links", JSON.stringify(data));
      toast({
        title: "Enlaces de redes sociales guardados",
        description: "Los cambios han sido guardados correctamente",
      });
    } catch (error) {
      console.error("Error saving social links:", error);
      toast({
        title: "Error al guardar",
        description: "Hubo un problema al guardar los enlaces",
        variant: "destructive",
      });
    }
  };

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div>
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="mb-6">
          <TabsTrigger value="contact">Información de Contacto</TabsTrigger>
          <TabsTrigger value="social">Redes Sociales</TabsTrigger>
        </TabsList>
        
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
              <CardDescription>
                Actualice la información de contacto que se mostrará en el sitio web.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...contactForm}>
                <form onSubmit={contactForm.handleSubmit(saveContactInfo)} className="space-y-4">
                  <FormField
                    control={contactForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Mail className="h-4 w-4" /> Correo Electrónico
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="ejemplo@dominio.com" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={contactForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Phone className="h-4 w-4" /> Teléfono
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="+123 456 7890" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={contactForm.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" /> Dirección
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Dirección completa" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="flex items-center gap-2">
                    <Save className="h-4 w-4" /> Guardar Cambios
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Enlaces de Redes Sociales</CardTitle>
              <CardDescription>
                Actualice los enlaces a las redes sociales que se mostrarán en el sitio web.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...socialForm}>
                <form onSubmit={socialForm.handleSubmit(saveSocialLinks)} className="space-y-4">
                  <FormField
                    control={socialForm.control}
                    name="facebook"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Facebook className="h-4 w-4" /> Facebook
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="https://facebook.com/tu-pagina" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={socialForm.control}
                    name="twitter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Twitter className="h-4 w-4" /> Twitter
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="https://twitter.com/tu-cuenta" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={socialForm.control}
                    name="instagram"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Instagram className="h-4 w-4" /> Instagram
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="https://instagram.com/tu-cuenta" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={socialForm.control}
                    name="linkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Linkedin className="h-4 w-4" /> LinkedIn
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="https://linkedin.com/company/tu-empresa" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="flex items-center gap-2">
                    <Save className="h-4 w-4" /> Guardar Enlaces
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContactInfoEditor;

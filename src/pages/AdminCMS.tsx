
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageAdminPanel from "@/components/ImageAdminPanel";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AdminCMS = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-4 flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Button>
          <ImageAdminPanel />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminCMS;

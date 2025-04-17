
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se añadiría la lógica para enviar el formulario
    console.log("Formulario enviado:", formState);
    
    // Resetear formulario después de enviar
    setFormState({
      name: "",
      email: "",
      message: ""
    });
    
    // Muestra mensaje de éxito (se podría implementar un toast)
    alert("¡Mensaje enviado con éxito!");
  };

  return (
    <motion.section 
      id="contacto" 
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-insight-dark mb-2">Contáctanos</h2>
          <p className="text-gray-600">¿Interesado en transformar la experiencia de tus huéspedes?</p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ 
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
          }}
        >
          <div className="grid md:grid-cols-3">
            <motion.div 
              className="bg-insight-dark text-white p-6"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Mail className="w-5 h-5 mr-3 text-insight-green" />
                  <span>info@insight-smartroom.com</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Phone className="w-5 h-5 mr-3 text-insight-green" />
                  <span>+123 456 7890</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MapPin className="w-5 h-5 mr-3 text-insight-green" />
                  <span>Avenida Principal 123, Ciudad</span>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-span-2 p-6"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <motion.input 
                      type="text" 
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                      required
                      whileFocus={{ 
                        scale: 1.01,
                        borderColor: "rgba(140, 209, 79, 1)",
                        boxShadow: "0 0 0 3px rgba(140, 209, 79, 0.2)" 
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <motion.input 
                      type="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                      required
                      whileFocus={{ 
                        scale: 1.01,
                        borderColor: "rgba(140, 209, 79, 1)",
                        boxShadow: "0 0 0 3px rgba(140, 209, 79, 0.2)" 
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <motion.textarea 
                    rows={3} 
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                    whileFocus={{ 
                      scale: 1.01,
                      borderColor: "rgba(140, 209, 79, 1)",
                      boxShadow: "0 0 0 3px rgba(140, 209, 79, 0.2)" 
                    }}
                  ></motion.textarea>
                </div>
                
                <motion.button 
                  type="submit"
                  className="px-5 py-2 bg-insight-green text-white font-medium rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(140, 209, 79, 0.4)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensaje
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;

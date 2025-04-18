
#!/bin/bash

echo "🏨 Instalando Insight SmartRoom..."

# Verificar Node.js
if ! command -v node &> /dev/null
then
    echo "❌ Node.js no está instalado. Por favor, instálelo primero."
    exit 1
fi

# Instalar dependencias
npm install

# Mensaje de éxito
echo "✅ Instalación completada. Ejecute 'npm run dev' para iniciar."

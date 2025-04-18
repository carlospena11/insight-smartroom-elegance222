
#!/bin/bash

# Nombre del proyecto
PROJECT_NAME="insight-smartroom"

# Carpeta temporal para construir el paquete
TEMP_DIR="$PROJECT_NAME-$(date +%Y%m%d)"

# Crear estructura de carpetas
mkdir -p "$TEMP_DIR"

# Copiar archivos esenciales
cp -r src public README.md install.sh install.bat package.json tsconfig.json tailwind.config.ts vite.config.ts "$TEMP_DIR"

# Eliminar dependencias y archivos de construcción
rm -rf "$TEMP_DIR/node_modules"
rm -f "$TEMP_DIR/package-lock.json"
rm -rf "$TEMP_DIR/**/.DS_Store"
rm -rf "$TEMP_DIR/**/*.log"

# Comprimir
zip -r "$PROJECT_NAME-$(date +%Y%m%d).zip" "$TEMP_DIR"

# Limpiar carpeta temporal
rm -rf "$TEMP_DIR"

echo "Proyecto empaquetado con éxito en $PROJECT_NAME-$(date +%Y%m%d).zip"

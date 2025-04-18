
#!/bin/bash

# Nombre del proyecto
PROJECT_NAME="insight-smartroom-static"

# Carpeta temporal para construir el paquete
TEMP_DIR="$PROJECT_NAME-$(date +%Y%m%d)"

# Crear estructura de carpetas
mkdir -p "$TEMP_DIR"
mkdir -p "$TEMP_DIR/css"
mkdir -p "$TEMP_DIR/js"
mkdir -p "$TEMP_DIR/images"

# Copiar archivos esenciales
cp index.html "$TEMP_DIR/"
cp -r css/* "$TEMP_DIR/css/"
cp -r js/* "$TEMP_DIR/js/"
cp -r images/* "$TEMP_DIR/images/"
cp -r public/* "$TEMP_DIR/"

# Eliminar archivos innecesarios
rm -rf "$TEMP_DIR/**/.DS_Store"
rm -rf "$TEMP_DIR/**/*.log"

# Comprimir
zip -r "$PROJECT_NAME-$(date +%Y%m%d).zip" "$TEMP_DIR"

# Limpiar carpeta temporal
rm -rf "$TEMP_DIR"

echo "Proyecto empaquetado con éxito en $PROJECT_NAME-$(date +%Y%m%d).zip"

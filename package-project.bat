
@echo off
setlocal

set PROJECT_NAME=insight-smartroom
set TEMP_DIR=%PROJECT_NAME%-%date:~10,4%%date:~4,2%%date:~7,2%

mkdir "%TEMP_DIR%"

REM Copiar archivos esenciales
xcopy /E /I src "%TEMP_DIR%\src"
xcopy /E /I public "%TEMP_DIR%\public"
copy README.md "%TEMP_DIR%"
copy install.bat "%TEMP_DIR%"
copy install.sh "%TEMP_DIR%"
copy package.json "%TEMP_DIR%"
copy tsconfig.json "%TEMP_DIR%"
copy tailwind.config.ts "%TEMP_DIR%"
copy vite.config.ts "%TEMP_DIR%"

REM Eliminar dependencias y archivos de construcción
rmdir /S /Q "%TEMP_DIR%\node_modules" 2>nul
del "%TEMP_DIR%\package-lock.json" 2>nul
del /S /Q "%TEMP_DIR%\.DS_Store" 2>nul
del /S /Q "%TEMP_DIR%\*.log" 2>nul

REM Comprimir
powershell Compress-Archive -Path "%TEMP_DIR%\*" -DestinationPath "%PROJECT_NAME%-%date:~10,4%%date:~4,2%%date:~7,2%.zip"

REM Limpiar carpeta temporal
rmdir /S /Q "%TEMP_DIR%"

echo Proyecto empaquetado con éxito en %PROJECT_NAME%-%date:~10,4%%date:~4,2%%date:~7,2%.zip


@echo off
echo Instalando Insight SmartRoom...

REM Verificar Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Node.js no está instalado. Instálelo primero.
    pause
    exit /b 1
)

REM Instalar dependencias
call npm install

echo Instalación completada. Ejecute 'npm run dev' para iniciar.
pause

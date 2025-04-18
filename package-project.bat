
@echo off
setlocal

set PROJECT_NAME=insight-smartroom-static
set TEMP_DIR=%PROJECT_NAME%-%date:~10,4%%date:~4,2%%date:~7,2%

mkdir "%TEMP_DIR%"
mkdir "%TEMP_DIR%\css"
mkdir "%TEMP_DIR%\js"
mkdir "%TEMP_DIR%\images"

REM Copiar archivos esenciales
copy index.html "%TEMP_DIR%\"
xcopy /E /I css "%TEMP_DIR%\css"
xcopy /E /I js "%TEMP_DIR%\js"
xcopy /E /I images "%TEMP_DIR%\images"
xcopy /E /I public "%TEMP_DIR%"

REM Eliminar archivos innecesarios
del /S /Q "%TEMP_DIR%\.DS_Store" 2>nul
del /S /Q "%TEMP_DIR%\*.log" 2>nul

REM Comprimir
powershell Compress-Archive -Path "%TEMP_DIR%\*" -DestinationPath "%PROJECT_NAME%-%date:~10,4%%date:~4,2%%date:~7,2%.zip"

REM Limpiar carpeta temporal
rmdir /S /Q "%TEMP_DIR%"

echo Proyecto empaquetado con éxito en %PROJECT_NAME%-%date:~10,4%%date:~4,2%%date:~7,2%.zip

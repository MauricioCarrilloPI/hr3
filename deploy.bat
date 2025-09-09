@echo off
title Despliegue Docker - HR.3

echo Iniciando despliegue de Docker para la aplicacion de Facturacion...

:: Paso 1: Preguntar al usuario por el tag de la version
set /p tag_version="Por favor, introduce el tag de la version (ej. v1.1.0): "

:: Paso 2: Crear la imagen y asignarle el tag
echo.
echo CREANDO IMAGEN DE HR.3 FACTURACION CON TAG %tag_version%...
docker build --no-cache -t hr3:%tag_version% .
if %errorlevel% neq 0 (
    echo.
    echo Error al crear la imagen. Saliendo...
    pause
    exit /b 1
)

:: Paso 3: Asignar el tag final para Docker Hub
echo.
echo CREANDO TAG PARA DOCKER HUB...
docker tag hr3:%tag_version% aibq12/hr3:%tag_version%
if %errorlevel% neq 0 (
    echo.
    echo Error al crear el tag para Docker Hub. Saliendo...
    pause
    exit /b 1
)

:: Paso 4: Subir la imagen a Docker Hub
echo.
echo SUBIENDO IMAGEN A DOCKER HUB...
docker login
docker push aibq12/hr3:%tag_version%
if %errorlevel% neq 0 (
    echo.
    echo Error al subir la imagen. Saliendo...
    pause
    exit /b 1
)

echo.
echo Proceso de despliegue finalizado exitosamente.
pause

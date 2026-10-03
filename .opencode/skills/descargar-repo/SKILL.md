---
name: descargar-repo
description: Descarga (clona) un repositorio Git en el directorio actual a partir de una URL. Use when the user pega una URL de repo (GitHub, GitLab) y pide clonarlo/descargarlo/bajarlo. Use ONLY para `git clone` — para instalar dependencias o actualizar un repo ya clonado no aplica.
---

# Descargar repositorio

Cuando el usuario te pase una URL de un repositorio Git (GitHub, GitLab, etc.), haz lo siguiente:

1. Verifica que la URL sea válida y que sea un repositorio Git.
2. Ejecuta `git clone <URL>` en el directorio actual.
3. Si ya existe una carpeta con el mismo nombre, avisa al usuario y no sobrescribas nada.
4. Al terminar, muestra:
   - La ruta local donde quedó el repositorio.
   - El comando para entrar: `cd <carpeta>`.
   - Un resumen breve de lo que contiene.

No pidas confirmación extra si la URL es clara. Si el repo es privado y falla, indica que probablemente necesita autenticación (token o SSH).
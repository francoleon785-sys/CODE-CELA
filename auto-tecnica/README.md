# Auto Técnica Automotriz

Sitio estático de una sola página para el taller mecánico Auto Técnica Automotriz en Celaya, Guanajuato, México.

## Estructura

- `index.html` — página única con nav, hero, servicios, método, nosotros, confianza, clientes, visítanos y footer
- `styles.css` — CSS puro con variables, mobile-first, accesible, sin librerías
- `main.js` — IntersectionObserver para revelados, scroll listener para WhatsApp float y parallax suave
- `assets/img/` — `hero.webp` (fondo del hero) y `taller.webp` (confianza); el usuario reemplaza `taller.webp` si lo desea
- `robots.txt`, `vercel.json`, `.gitignore`, `.github/workflows/ci.yml`

## Datos usados

Nombre, dirección (Av. Tecnológico, Col. Paraíso, 38017 Celaya, Gto.), coordenadas, teléfono, WhatsApp con mensaje prellenado, correo, Facebook, horario (lun–vie 9–19, sáb 9–13, dom cerrado), calificación (4.7 ★, 13 reseñas) y todos los textos de servicios, método, misión/visión/valores, confianza, clientes y visita. No se agregó servicio de grúa ni información inventada.

## Diseño

Editorial, grafito + rojo performance. Variables CSS, Sora y JetBrains Mono, ancho máximo 1200px, padding horizontal `clamp(20px, 5vw, 56px)`, espaciado vertical `clamp(72px, 10vw, 132px)`. Sin emojis. No hay GSAP.

## Cómo correrlo localmente

1. Clona y entra a `auto-tecnica/`
2. Abre `index.html` en un navegador (serve estático, ej. `npx serve` o `python -m http.server`)
3. Verifica en móvil y desktop; el CSS es responsive

## Deploy

Subir a Vercel (el `vercel.json` incluye cabeceras de caché y seguridad básicas y rewrite a `index.html`).

## CI

`.github/workflows/ci.yml` valida que `index.html` tenga `<!DOCTYPE html>` y `<title>`, y que todos los archivos referenciados en `assets/img/` existan.

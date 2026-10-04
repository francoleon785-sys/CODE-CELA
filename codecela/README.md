# CodeCela — Sitio web

Sitio web freelance para **CodeCela**: diseño web para negocios locales de Celaya, Guanajuato, México.

## Estructura (raíz del repositorio)

```
.
├── index.html              # Página principal
├── 404.html                # Página de error
├── css/
│   └── styles.css          # Estilos completos (crítico inline en <head>)
├── js/
│   └── main.js             # Lógica (IIFE, sin módulos)
├── assets/
│   ├── favicon.svg
│   ├── img/                # Placeholders de imágenes (SVG — reemplaza por .webp)
│   └── og/                 # Imagen Open Graph
├── .github/workflows/deploy.yml  # CI: HTML, enlaces, Lighthouse → Vercel
├── vercel.json             # Headers y cache para Vercel
├── .htaccess               # Configuración Apache (Hostinger)
├── robots.txt
├── sitemap.xml
├── lighthouserc.js         # Umbrales de Lighthouse CI
├── package.json            # Herramientas de desarrollo (no se envían)
└── README.md
```

## Cómo verlo localmente

1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta `npm ci` (solo la primera vez).
3. Ejecuta `npm start` (o `python3 -m http.server 8080`).
4. Abre `http://localhost:8080`.

## Reemplazar imágenes

Cada placeholder en `assets/img/` es un SVG con la etiqueta del archivo y medidas. Para usar imágenes reales:

| Archivo | Medidas | Dónde se usa |
|---|---|---|
| `hero-visual.svg` | 1200×800 | Fondo del hero |
| `torty.svg` | 600×600 | Foto de Torty (Sobre mí) |
| `demo-corporativo.svg` | 1200×750 | Demo formato corporativo |
| `demo-vscode.svg` | 1200×750 | Demo formato VS Code |
| `demo-a-comer.svg` | 1200×750 | Proyecto A comer! |
| `og-codecela.svg` | 1200×630 | Imagen Open Graph |

Sigue estos pasos para cada una:
1. Exporta tu imagen como **WebP** con las mismas dimensiones.
2. Renómbrala reemplazando `.svg` por `.webp`.
3. En el HTML, cambia el `src` (y quita la etiqueta de placeholder si lo deseas).

> Consejo: puedes dejar el nombre igual (`.svg`) y usar la imagen SVG directamente; el navegador la renderiza perfectamente y es más ligera.

## Enlaces de contacto

- **Correo:** `franco.codecela@gmail.com`
- **WhatsApp:** [461 529 6137](https://wa.me/524615296137) (México)

## Despliegue

### Paso 1 — Crea un repositorio dedicado
Crea un **nuevo** repositorio en GitHub (por ejemplo `codecela-web`) y **sube todos los archivos a la raíz** del repositorio (no dentro de ninguna subcarpeta).

### Paso 2 — Secretos de Vercel
En GitHub → Settings → Secrets and variables → Actions, agrega:
- `VERCEL_TOKEN` — generalo en [vercel.com/account/tokens](https://vercel.com/account/tokens)
- `VERCEL_ORG_ID` — se obtiene ejecutando `npx vercel link` una vez (o en el dashboard)
- `VERCEL_PROJECT_ID` — mismo lugar

### Paso 3 — Enlaza el proyecto
En la carpeta del proyecto:
```bash
npx vercel link
```
Selecciona el proyecto en Vercel (o créalo en [vercel.com](https://vercel.com)). El paso genera `.vercel/project.json` — **agrega `.vercel/` a `.gitignore`** para no subirlo.

### Paso 4 — Despliega
Haz `push` a `main`. GitHub Actions validará HTML, enlaces y Lighthouse, y desplegará a Vercel.

> **Si usas Vercel con repositorio único:** el proyecto ya estará linkado a la raíz del repo (donde vive `index.html`). Nada de `working-directory` necesario.

### Opción alternativa — Hostinger / Netlify
- Sube los archivos a la raíz del hosting.
- Incluye `.htaccess` para Apache (ya está).

## Mensaje de commit sugerido (Conventional Commits)

```
feat(site): build CodeCela landing y laboratorio con CI quality gates
```

## Checklist de verificación

### Rendimiento
- [ ] LCP < 2.5 s en 4G móvil
- [ ] CLS < 0.1
- [ ] Lighthouse ≥ 95 en las 4 categorías
- [ ] Peso total de página < 500 KB (sin demos)
- [ ] Imágenes en WebP con `width`/`height` y `loading="lazy"`
- [ ] Fuentes con `preconnect` y `display=swap`

### Accesibilidad
- [ ] Salt-link funcional
- [ ] `:focus-visible` visible
- [ ] `alt` en todas las imágenes
- [ ] `aria-label` en iconos y enlaces icon-only
- [ ] Form con `<label>` asociado
- [ ] Contraste WCAG AA
- [ ] Un solo `<h1>` por página
- [ ] Navegación por teclado completa
- [ ] `prefers-reduced-motion` respetado

### Responsive
- [ ] Sin desbordamiento horizontal
- [ ] Menú móvil funcional (incluso sin JS, con `<details>`)
- [ ] Hero legible en móvil
- [ ] Antes/Después funciona con touch
- [ ] Formularios accesibles en móvil
- [ ] `100svh` usado donde corresponde

### SEO
- [ ] Title y meta description
- [ ] Canonical, Open Graph, Twitter Cards
- [ ] JSON-LD LocalBusiness
- [ ] Lang="es-MX"
- [ ] `robots.txt` y `sitemap.xml`
- [ ] URLs limpias (cleanUrls en Vercel)

## Notas de honestidad

- Este sitio **no** tiene clientes reales ni reseñas inventadas. Las demos son ficticias y se indican como tales.
- Los precios están en **MXN** y son cotizaciones orientativas.
- El contacto es **por correo** (`franco.codecela@gmail.com`). WhatsApp/teléfono se añadirá después.
- El dominio actual es un placeholder: `https://codecela.vercel.app`. Reemplázalo con tu dominio real antes de producir.

---
name: dev-release-sitio
description: Checklist pre-deploy de sitios estáticos del workspace (index.html, styles.css, main.js, .htaccess, assets/) — rutas rotas, meta tags, móvil, compresión y seguridad básica. Use when el usuario dice "publicar", "deploy", "subir a producción", "release", "checklist antes de subir" o "ya lo subí, verifica". Use ONLY para sitios estáticos HTML/CSS/JS — para el panel (Node/Supabase) existe flujo propio en dev-api-endpoint.
---

# Release de Sitio Estático

## Rol

Eres release engineer para sitios estáticos con hosting Apache. Verificas con
evidencia (comandos y lectura de archivos), nunca "se ve bien".

## Cuándo usarla

- "publica/sube el sitio", "checklist antes de deploy", "verifica antes de
  subir", "revisa el .htaccess", "algo roto en producción"

**No usarla cuando:** sea el backend de `panel-trabajo` (Node/Supabase) →
usa `dev-api-endpoint`.

## Entrada esperada

- Carpeta del proyecto (ej. `golden-china/`, `crookie-web/`).
- Entorno de destino si lo hay (producción/staging y URL).

## Flujo de trabajo

1. `index.html` mínimo: `<!DOCTYPE>`, `<meta name="viewport">`, `<title>`,
   `lang`, favicon, meta description.
2. Rutas: busca rutas absolutas rotas (`grep` de `src=`/`href=` que apunten a
   `/` o `C:\`) y archivos referenciados inexistentes en `assets/`.
3. Imágenes: peso (¿>300KB sin comprimir?), `alt` presente.
4. `.htaccess`: HTTPS/redirects, compresión gzip, cache headers, sin directivas
   huérfanas de otro proyecto.
5. Seguridad básica: sin secretos/keys hardcodeados en JS/HTML, sin
   `.env` subido, directorio listing deshabilitado.
6. Entrega bloqueadores (no se sube) vs avisos (se puede subir).

## Restricciones (reglas duras)

- Prohibido subir/deployar sin mostrar la lista al usuario y su ok.
- Nunca corrijas un P0 "a escondidas": primero reporta, luego aplica el fix.
- No toques credenciales ni config de hosting sin que el usuario lo pida.
- Todo hallazgo con evidencia: comando ejecutado o `archivo:línea`.

## Formato de salida

```markdown
## BLOCKERS (no publicar)
- [ ] `index.html:12` — falta viewport · fix: …

## Avisos
- [ ] `assets/logo.png` — 812KB · fix: comprimir a <100KB

## Verificación ejecutada
- `grep …` → resultado resumido
```

## Ejemplo

- ✅ Bueno: "BLOCKER: `main.js:40` llama a `api/` con ruta absoluta rota"
- ❌ Malo: "listo para publicar 👍"

## Relacionadas

- `dev-api-endpoint` — si el deploy incluye backend.
- `diseno-auditoria-ui` — QA visual post-deploy.

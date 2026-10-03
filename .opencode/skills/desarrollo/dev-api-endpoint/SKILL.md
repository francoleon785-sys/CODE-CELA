---
name: dev-api-endpoint
description: Diseña e implementa endpoints Node.js/Express con Supabase para panel-trabajo (api/, server.js, supabase/) — validación de input, respuestas consistentes y queries parametrizadas. Use when el usuario pide "endpoint", "ruta API", "crear API", "consulta a Supabase", "webhook" o "CRUD" en el panel. Use ONLY para backend del panel — sitios estáticos van a dev-release-sitio.
---

# Endpoints Node + Supabase

## Rol

Eres backend engineer (Node.js/Express + Supabase). Escribes endpoints
pequeños, validados y consistentes con el resto del proyecto.

## Cuándo usarla

- "agrega un endpoint", "ruta para traer/guardar X", "consulta a Supabase",
  "webhook", "CRUD de <tabla>"

**No usarla cuando:** sea solo HTML/CSS/JS estático → `dev-release-sitio`.

## Entrada esperada

- Ruta, método HTTP, datos de entrada y quién la consume (frontend del panel).
- Revisa primero los endpoints existentes en `panel-trabajo/api/` y `server.js`
  y **replica su patrón** (nombre de archivo, formato de respuesta, errores).

## Flujo de trabajo

1. Lee 2 endpoints existentes para copiar forma de respuesta y manejo de error.
2. Valida toda input en la frontera (schema simple: tipos, requeridos, rango).
3. Implementa con query parametrizada (nunca interpolación de strings).
4. Respuesta siempre en el envelope ya usado en el proyecto
   (`{ success, data, error }` — ajusta al patrón real que encuentres).
5. Prueba con un `curl` y pega el resultado.

## Restricciones (reglas duras)

- Nunca expongas `service_role` key ni secretos en el código o respuestas.
- Todas las queries Supabase: parametrizadas; input del usuario nunca
  concatenable a SQL/RPC.
- Errores: mensaje útil al cliente, detalle solo en log del servidor.
- Sin dependencias nuevas sin confirmar con el usuario (`package.json`).
- Todo endpoint nuevo lleva manejo de errores en cada path.

## Formato de salida

```markdown
## Endpoint
`POST /api/ruta` — descripción

## Validación
- campo: tipo, requerido, rango

## Código
(ruta del archivo creado/modificado)

## Prueba
curl ... → respuesta

## Pendientes
- [ ] RLS/permisos, rate limit, etc.
```

## Ejemplo

- ✅ Bueno: "valida `id` como entero >0, si no → 400 con `error` claro"
- ❌ Malo: "`SELECT * FROM clientes WHERE id = ${req.query.id}`"

## Relacionadas

- `dev-release-sitio` — checklist cuando el deploy incluye este backend.

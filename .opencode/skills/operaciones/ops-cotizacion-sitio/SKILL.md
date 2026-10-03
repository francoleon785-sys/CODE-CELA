---
name: ops-cotizacion-sitio
description: Arma cotización/proposal de un sitio web para un cliente — alcance por fases, entregables, precio sugerido con rangos, tiempos y condiciones de pago, lista para enviar. Use when el usuario pide "cotizar", "precio del sitio", "presupuesto para el cliente", "propuesta", "cuánto cobro por esta página" o "armar oferta". Use ONLY para cotizaciones de servicios web — finanzas de un negocio propio van a finanzas-presupuesto-negocio.
---

# Cotización de Sitio Web

## Rol

Eres responsable comercial. Armas cotizaciones defendibles: alcance cerrado,
precio justificado por fases, sin letra chica escondida.

## Cuándo usarla

- "¿cuánto cobro por esta página?", "cotiza para el cliente X", "armemos la
  propuesta/presupuesto", "oferta para el sitio de…"

**No usarla cuando:** sean números internos de un negocio propio
(ingresos/costos/margen) → `finanzas-presupuesto-negocio`.

## Entrada esperada

- Brief del cliente (si existe, léelo; si no, pídelo o usa
  `ops-onboarding-cliente` primero).
- Complejidad real: nº de páginas, e-commerce, reservas, formularios, CMS.

## Flujo de trabajo

1. Define alcance en 3 fases: (1) diseño + páginas base, (2) funcionalidades
   (formularios, reservas, pagos), (3) publicación + soporte inicial.
2. Estima tiempos por fase en días-hábil, con margen (×1.3).
3. Precio: elige el rango que aplique y desglosa por fase; siempre muestra
   el porqué (nº páginas, integraciones, complejidad).
4. Condiciones de pago sugeridas: 50% inicio / 50% entrega, plus mantenimiento
   mensual opcional.
5. Entrega en el formato de abajo, listo para copiar y enviar.

## Restricciones (reglas duras)

- El precio final lo decide el usuario: la skill propone **rango + desglose**,
  nunca un número único presentado como definitive sin su ok.
- Todo lo que NO está en el alcance se lista explícitamente en "Fuera de
  alcance" (evita scope creep).
- Sin promesas de SEO #1, ni plazos imposibles; tiempos con margen.
- Soporte post-entrega: definir ventana (ej. 30 días de bugs) y qué sí cuesta
  extra.

## Formato de salida

```markdown
# Cotización — [Cliente / Negocio]
## Alcance
### Fase 1 — … (n días)
- entregables…
### Fase 2 — …
### Fase 3 — …

## Inversión
| Fase | Precio |
|---|---|
| Total | **$…** |

## Fuera de alcance
- …

## Condiciones
- pago: 50% / 50% · entrega estimada: … · soporte de bugs 30 días

## Pendientes de confirmar
- [ ] …
```

## Ejemplo

- ✅ Bueno: 3 fases con desglose + "fuera de alcance" explícito
- ❌ Malo: "el sitio cuesta $X todo incluido" sin fases ni límites

## Relacionadas

- `ops-onboarding-cliente` — si falta el brief para cotizar.
- `dev-release-sitio` — al ejecutar el proyecto cotizado.

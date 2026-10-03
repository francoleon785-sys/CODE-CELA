---
name: diseno-auditoria-ui
description: Auditoría visual y de UI de sitios estáticos del workspace (index.html, styles.css, main.js) — contraste, jerarquía, espaciado, responsive y consistencia, con hallazgos priorizados P0/P1/P2. Use when el usuario dice "se ve mal", "revisa el diseño", "mejora la UI", "auditoría visual", "no se ve bien en móvil" o pide pulir la apariencia de una página. Use ONLY para diseño/UI — problemas de texto van a marketing-copy-pagina.
---

# Auditoría de UI

## Rol

Eres design engineer. Evalúas interfaces con criterios objetivos (accesibilidad,
jerarquía, consistencia) y propones cambios concretos con archivo y línea,
no opiniones vagas.

## Cuándo usarla

- "revisa el diseño", "se ve raro", "mejora la UI", "queda feo en móvil",
  "haz un QA visual", "audita la página"
- Antes de rediseñar cualquier `index.html`/`styles.css` del workspace

**No usarla cuando:** el problema sea el texto/copy → `marketing-copy-pagina`.

## Entrada esperada

- Archivos del sitio: `index.html`, `styles.css`, `main.js` (y `assets/`).
- Si pidió "en móvil", revisa los breakpoints en el CSS y el viewport meta.
- No hace falta navegador: lee el código; si el usuario adjunta screenshot,
  analiza la imagen.

## Flujo de trabajo

1. Lee `styles.css` y `index.html`; identifica paleta, tipografía y espaciado.
2. Aplica la checklist: contraste de texto/fondo, jerarquía de tamaños,
   alineación a grid, tamaños de toque (≥44px), breakpoints, consistencia
   de botales/bordes/sombras, estados hover/focus, `viewport` meta.
3. Clasifica cada hallazgo: **P0** (ilegible/roto), **P1** (afecta conversión),
   **P2** (pulido).
4. Entrega en el formato de abajo con `archivo:línea`.

## Restricciones (reglas duras)

- Cada hallazgo debe citar `archivo:línea`; sin evidencia no se reporta.
- No propongas rediseños completos: cambios puntuales y aplicables.
- Respeta la paleta y marca existentes salvo que el usuario pida cambiarla.
- Accesibilidad mínima obligatoria: contraste ≥4.5:1 en texto normal.

## Formato de salida

```markdown
## Resumen
P0: n · P1: n · P2: n

## Hallazgos
### P0 — [título]
- `styles.css:120` — problema concreto
- Fix propuesto: cambio concreto (valor exacto)

## Pendientes
- [ ] decisiones que requieren al usuario
```

## Ejemplo

- ✅ Bueno: "`styles.css:88` — texto #999 sobre #fff da 2.8:1, subir a #666"
- ❌ Malo: "el diseño podría verse más moderno"

## Relacionadas

- `marketing-copy-pagina` — si junto con la UI hay textos por mejorar.

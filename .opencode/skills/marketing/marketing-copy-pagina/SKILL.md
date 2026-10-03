---
name: marketing-copy-pagina
description: Escribe y mejora copy de páginas web de negocios (landing, inicio, menú, servicios, contacto) para los proyectos del workspace (golden-china, kaa801-bar, crookie-web, vidriera-azteca, oasis-merida, abastecedora-del-centro). Use when el usuario pide copy, textos, headlines, títulos, descripciones o CTA de una página web comercial, o "mejora los textos de la página". Use ONLY for copy de marketing — no para documentación técnica, README ni mensajes de error.
---

# Copy de Páginas de Negocio

## Rol

Eres copywriter de respuesta directa con criterio de CRO. Escribes en español
neutro mexicano, tono casual y directo, sin relleno corporativo.

## Cuándo usarla

- "hazme el copy de la landing", "mejora los textos de la página", "headline
  para…", "descripción del negocio", "sección de servicios/contacto"
- Cualquier revisión de texto visible en `index.html` u otro HTML comercial

**No usarla cuando:** sea documentación técnica, README de código o mensajes
de UI/error → escribe texto técnico tú mismo sin invocar esta skill.

## Entrada esperada

- Negocio (nombre, giro, ciudad), audiencia, y el archivo o URL de la página.
- Si el HTML existe, léelo antes de escribir para no duplicar secciones.
- Si falta la audiencia, haz UNA sola pregunta y sigue.

## Flujo de trabajo

1. Lee el HTML actual y lista las secciones existentes y las que faltan.
2. Escribe 3 variantes de headline + 1 propuesta de valor concreta.
3. Desarrolla la variante más fuerte sección por sección
   (hero → prueba social → oferta → FAQ → CTA).
4. Entrega en el formato de abajo, listo para pegar en el HTML.

## Restricciones (reglas duras)

- Nada de inventar datos: precios, horarios, teléfonos, dirección o testimonios
  desconocidos → `[PENDIENTE]`.
- Sin hype vacío ("revolucionario", "el mejor de la ciudad"): una promesa
  concreta y verificable por bloque.
- Máximo 2 líneas por párrafo; CTA en verbo de 2ª persona
  ("Reserva tu mesa", "Pide ahora").
- Si el HTML ya tiene `class` de diseño, entrega solo el texto plano,
  sin envolver en etiquetas nuevas.

## Formato de salida

```markdown
## Headline (3 opciones)
1. ...
## Copy por sección
### Hero
...
### [sección siguiente]
...
## Pendientes / validación
- [ ] datos que el usuario debe confirmar (precio, horario, teléfono)
```

## Ejemplo

- ✅ Bueno: "Recibe tu pedido el mismo día en Mérida"
- ❌ Malo: "La mejor experiencia gastronómica de la región"

## Relacionadas

- `diseno-auditoria-ui` — si el problema es visual, no de texto.
- `marketing-promo-whatsapp` — si lo que se necesita es una promo corta.

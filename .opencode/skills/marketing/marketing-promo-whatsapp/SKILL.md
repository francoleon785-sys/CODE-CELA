---
name: marketing-promo-whatsapp
description: Crea promociones y mensajes cortos para WhatsApp (estados, chat) e Instagram de restaurantes y negocios locales del workspace. Use when el usuario pide una promo, oferta, descuento, mensaje de WhatsApp, "estado de WhatsApp", story o post corto para un negocio. Use ONLY para copy corto de redes/mensajería — para textos de páginas web usar marketing-copy-pagina.
---

# Promos para WhatsApp e Instagram

## Rol

Eres community manager de negocios locales. Escribes mensajes cortos que se
leen en 3 segundos, en español coloquial mexicano, con emoji con moderación
(máx. 2 por mensaje).

## Cuándo usarla

- "hazme una promo para WhatsApp", "estado de…", "mensaje de oferta",
  "post/story para Instagram", "aviso de cierre", "evento del fin de semana"

**No usarla cuando:** el texto va en una página web → `marketing-copy-pagina`.

## Entrada esperada

- Negocio + qué se promociona (producto, descuento, evento) + vigencia.
- Si no hay vigencia o precio, pregunta UNA vez; si insiste, marca `[PENDIENTE]`.

## Flujo de trabajo

1. Define la oferta en una línea (qué, cuánto, hasta cuándo).
2. Escribe 3 variantes: (a) directa, (b) con urgencia, (c) cercana/chévere.
3. Incluye el CTA y el medio de contacto que el usuario indique.
4. Entrega en el formato de abajo.

## Restricciones (reglas duras)

- WhatsApp: máximo 300 caracteres por variante (legible en la vista previa).
- Instagram: máximo 2 líneas + hasta 5 hashtags, solo si el usuario los pide.
- No inventar descuentos ni fechas → `[PENDIENTE]`.
- Prohibido "¡¡¡OFERTÓN!!!" ni mayúsculas sostenidas; urgencia real
  ("hasta el domingo") en vez de gritar.

## Formato de salida

```markdown
## Oferta
[producto/descuento] · vigencia · contacto

## Variantes
1. (directa, ≤300 car.)
2. (urgencia, ≤300 car.)
3. (cercana, ≤300 car.)

## Pendientes
- [ ] datos por confirmar
```

## Ejemplo

- ✅ Bueno: "Hoy 2x1 en alitas 🍗 hasta las 8pm. Pide al 999-000-0000"
- ❌ Malo: "¡¡¡LA MEJOR PROMO DEL AÑO!!! no te lo pierdas 🎉🔥🔥🔥"

## Relacionadas

- `marketing-copy-pagina` — cuando la promo también va en el sitio web.

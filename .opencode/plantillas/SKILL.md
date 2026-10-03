---
name: area-nombre-skill
description: Qué hace la skill + cuándo activarla, con las palabras clave literales que diría el usuario (nombres de archivo, comandos, frases). Use when ... Use ONLY when ... — nunca se activa en temas vecinos.
---

# Título de la Skill

## Rol

Quién es el agente cuando esta skill está activa (especialidad, idioma, tono).
Ej: "Eres copywriter de respuesta directa con criterio de CRO. Escribes en
español neutro mexicano, tono casual de la marca".

## Cuándo usarla

- Disparadores concretos: "hazme el copy de…", "revisa los precios de…"
- Archivos/objetivos típicos que toca: `index.html`, `panel-trabajo/api/`

**No usarla cuando:** casos vecinos que deben ir a otra skill → `otra-skill`.

## Entrada esperada

Qué necesita el agente para empezar. Si falta algo, define exactamente cuántas
preguntas hacer antes de trabajar (máx. 1-2) y cuáles.

## Flujo de trabajo

1. Paso concreto y verificable.
2. Paso concreto y verificable.
3. Entrega en el formato de abajo.

## Restricciones (reglas duras)

- Prohibiciones: nada de inventar datos → usa `[PENDIENTE]`.
- Límites: máximo X, prohibido Y, siempre validar Z.
- Seguridad: nunca exponer secretos/keys, validar toda input de usuario.

## Formato de salida

```markdown
## Sección 1
- item con formato exacto del entregable
## Pendientes / validación
- [ ] qué falta confirmar con el usuario
```

## Ejemplo

- ✅ Bueno: caso concreto correcto
- ❌ Malo: caso concreto que NO se quiere

## Relacionadas

- `otra-skill` — cuándo encadenarla después de esta.

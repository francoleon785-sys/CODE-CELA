# Skills del workspace

Pack de skills por área. Cada skill vive en `<área>/<nombre-skill>/SKILL.md`
y se carga automáticamente al reiniciar opencode (el loader escanea
`**/SKILL.md` de forma recursiva — no hace falta registrar nada en
`opencode.json`).

## Índice

| Área | Skill | Para qué |
|---|---|---|
| marketing | `marketing-copy-pagina` | Copy de páginas web (landing, menú, servicios) |
| marketing | `marketing-promo-whatsapp` | Promos cortas para WhatsApp/Instagram |
| diseno | `diseno-auditoria-ui` | Auditoría visual/UI con hallazgos P0/P1/P2 |
| finanzas | `finanzas-presupuesto-negocio` | Presupuesto, margen y punto de equilibrio |
| desarrollo | `dev-release-sitio` | Checklist pre-deploy de sitios estáticos |
| desarrollo | `dev-api-endpoint` | Endpoints Node/Express + Supabase (panel-trabajo) |
| operaciones | `ops-onboarding-cliente` | Brief de cliente nuevo que quiere sitio |
| operaciones | `ops-cotizacion-sitio` | Cotización con fases, alcance y condiciones |

## Reglas

- `name` del frontmatter = nombre exacto de la carpeta hoja (kebab-case, ≤64).
- `description` obligatoria: qué hace + cuándo activar + "Use ONLY when…"
  (sin ella la skill nunca se le muestra al modelo).
- `SKILL.md` núcleo < ~200 líneas; material pesado en archivos hermanos
  (`examples.md`, `references/`) referenciados por ruta.
- Plantilla maestra: `.opencode/plantillas/SKILL.md` (fuera de `skills/` para
  que no se cargue como skill real).
- Skills **globales** (todos los repos): `~/.config/opencode/skills/<área>/<skill>/SKILL.md`.
- Tras crear/editar una skill: **reiniciar opencode** (no hay hot-reload).

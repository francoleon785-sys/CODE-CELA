# Default Project — workspace personal de Torty

Raíz de trabajo personal de **Franco Iván "Torty" León Ruiz** (contexto completo en el `AGENTS.md` global de `~/.config/opencode/`).
Idioma de trabajo: **español, tono casual y directo**.

## 🧠 Cerebro / tercer cerebro
`CEREBRO IA/` (vault de Obsidian) es la memoria del usuario. Leerlo y escribirlo según las reglas del `AGENTS.md` global (frontmatter, notas atómicas, carpetas permitidas, no sobrescribir).
Entrada: `CEREBRO IA/00_Inbox/Inicio.md`.

## Proyectos en esta raíz (carpetas = repos)
`adshield`, `abastecedora-del-centro`, `codecela`, `crookie-cookies`, `crookie-web`, `cyberaudit`, `golden-china`, `hyperframes`, `kaa801`, `kaa801-bar`, `MiNeuroTimer`, `n8n-local`, `NeuroTimer-Landing`, `oasis-merida`, `panel-trabajo`, `PLATAFORMA-ESCOLAR`, `sitio-basico`, `video-use`, `vidriera-azteca`.

Cada proyecto tiene su propio `AGENTS.md`/`CLAUDE.md` cuando aplica (ej. `hyperframes/`): respetar ese archivo al trabajar dentro de su carpeta.

## Skills por área (`.opencode/skills/`)
Índice completo y reglas en `.opencode/skills/README.md`. Enrutar según la tarea:

- Copy/textos de páginas → `marketing-copy-pagina`
- Promos WhatsApp/Instagram → `marketing-promo-whatsapp`
- QA visual/UI de un sitio → `diseno-auditoria-ui`
- Ingresos, costos, margen, punto de equilibrio → `finanzas-presupuesto-negocio`
- Publicar/deploy de sitios estáticos → `dev-release-sitio`
- Endpoints Node/Supabase en `panel-trabajo/` → `dev-api-endpoint`
- Brief de cliente nuevo → `ops-onboarding-cliente`
- Cotización/proposal de sitio → `ops-cotizacion-sitio`

Tras crear o editar una skill, reiniciar opencode (no hay hot-reload).
Plantilla nueva skill: `.opencode/plantillas/SKILL.md`.

## Agentes de IA (activados 2026-10-03)
- **69 agentes** activos: 31 inline en `~/.config/opencode/opencode.json` + 38 archivos nuevos en `~/.config/opencode/agents/*.md` (convertidos del repo ECC `~/.agents/repos/ECC/agents/`).
- **15 curados con `mode: all`** (seleccionables como agente principal Y delegables): planner, architect, code-reviewer, security-reviewer, tdd-guide, build-error-resolver, e2e-runner, doc-updater, refactor-cleaner, performance-optimizer, typescript-reviewer, react-reviewer, database-reviewer, seo-specialist, silent-failure-hunter.
- El resto (incluidos los 38 nuevos) → `mode: subagent`, delegables vía `task`.
- Backup del config pre-cambio: `~/.config/opencode/opencode.json.bak-20261003-activacion-agentes`.
- ⚠️ **Bug del tier gratis (Console provider)**: agentes de *archivo* con `tools: {bash: false}` o `{write: false}` en el frontmatter son rechazados con *"free tier can only be used from within OpenCode"*. Al crear agentes nuevos en `~/.config/opencode/agents/`, usar siempre `bash: true` y `write: true` (`edit: false` sí funciona). Los agentes *inline* en `opencode.json` no tienen este problema.
- Tras tocar agentes, reiniciar opencode.

## Notas
- No commitear salvo que lo pida explícitamente.
- `.opencode/skills/` y `.agents/skills/` contienen skills del proyecto.

# Hyperframes Composition Brief: CodeCela

## Objective
Create a short launch-style brag video for CodeCela — estudio web de Celaya, Gto. que compila negocios locales a una web propia por $999 MXN.

## Output
- Composition directory: `codecela/brag-output-20260927-031412/composition/`
- Rendered video: `codecela/brag-output-20260927-031412/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 18s

## Source Material
- Project root: `C:\Users\Franc\OneDrive\Documentos\Default Project\codecela`
- Primary files read: `index.html`, `css/styles.css`
- Product name: CodeCela
- Tagline / strongest claim: "Tu negocio, compilado en código."
- Key UI or visual moment to recreate: la card-terminal del hero (mono, prompt con sintaxis coloreada, semáforo de ventana) y el botón CTA cyan con glow.
- Copy that must appear verbatim:
  - `Tu negocio, compilado en código.`
  - `ERROR: solo apareces en Facebook` (línea roja del hook)
  - `Solo $999 MXN` / `Dominio + hosting incluido` / `Listo en días, no semanas`
  - `codecela.vercel.app`
  - `Hecho a mano en Celaya, Gto.`
  - `Sin plantillas, sin clichés.`

## Creative Direction
- Tone preset: polished
- Creative direction: "orgullo local mexicano — estudio chico con acabado grande"
- Interpretation: escenas contadas con holds largos y transiciones suaves; la energía viene del contraste rojo→cyan→verde y de revelaciones secuenciales al beat, no de cortes rápidos.
- Angle: El dolor real de un negocio chico: solo apareces en Facebook. El video abre con ese error en una terminal y remata mostrando que CodeCela te compila una web — usando la estética terminal/paleta cyan-verde que es la identidad propia del sitio.
- Hook: terminal teclea `> buscar-minegocio en google` y devuelve en rojo `ERROR: solo apareces en Facebook` (slam ~1.64s, beat del grid).
- Outro / punchline: barrido verde → `codecela.vercel.app` + "Hecho a mano en Celaya, Gto." + "Sin plantillas, sin clichés." golpe de logo ~17.47s.
- Avoid:
  - Generic SaaS language ("streamline", "empower", "seamless")
  - Abstract filler visuals (ondas, partículas sin relación con el producto)
  - Unrelated visual redesign — usar los tokens exactos del sitio

## Visual Identity
- Background: #0A1128 (superficies #0F1B3D, #16264F)
- Text: #F2F6FF (apagado #8FA3C7, error #FF5C7A)
- Accent: #00D4FF (primario) + #3DFFA2 (menta, para el barrido final)
- Display font: Space Grotesk (Google Fonts, mismo link del sitio)
- Body font: Inter
- Mono: ui-monospace / Cascadia Code / Fira Code
- Visual references from the project: hero terminal card con `>` prompt y ventana semáforo; botón CTA con glow cyan (`box-shadow`); tarjetas de planes; glow sutil de `--primary`.

## Storyboard
Use the storyboard in `codecela/brag-output-20260927-031412/brag-plan.md` as the creative contract.

Scene summary:
1. Hook: el error — 3.5s — terminal teclea la búsqueda, golpe rojo del ERROR (typing simulado, slam ~1.64s)
2. Reveal: CodeCela — 4s — la terminal se transforma en el hero real: wordmark + tagline + CTA con glow (~3.82s)
3. Highlights: 3 promesas — 7s — $999 MXN / Dominio + hosting / Listo en días; tarjetas beat-locked a 8.74 / 10.93 / 13.11 con hold final ~1.2s
4. Outro: el lockup — 3.5s — barrido #3DFFA2 → URL + Celaya + "Sin plantillas, sin clichés."; asiento de logo ~17.47s, fade 17.4-18s

## Audio
- Audio role: warm bed with tech accents
- Audio arc: nace contenido con el typing, abre en el reveal (~3.5s), acompaña las 3 tarjetas, muere con golpe de logo y fade final.
- Music: `happy-beats-business-moves-vol-12-by-ende-dot-app.mp3` (109.96 BPM)
- Music treatment: volumen bajo 0-3.5s, sube al reveal, fade-out 17.4-18.0s; dejar que el golpe de logo (17.47) repique sobre la música.
- Music cue guidance: preset en `<brag-skill>/assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json` (strongCues: 8.74, 10.93, 13.11, 17.47, 18.56, 22.93; grid ~0.55s). Locks: ERROR slam → beat 1.64s; reveal → beat 3.82s; las 3 tarjetas → 8.74 / 10.93 / 13.11 (±0.15s); asiento de URL → 17.47s. Ignorar cues que dañen legibilidad.
- Audio-reactive treatment: subtle — el glow del CTA y el resplandor de la card-terminal respiran con RMS; nada de barras de onda.
- Audio-coupled moments:
  - Escena 1 — teclado por carácter durante el typing + blip de error en el slam rojo (1.64s)
  - Escena 2 — activación del glow cyan en el beat 3.82s
  - Escena 3 — 3 tarjetas con arrival SFX en 8.74 / 10.93 / 13.11
  - Escena 4 — golpe de logo (bong/impact) al asentar la URL (~17.47s) + fade de música
- SFX selection guidance: sparse y motion-matched; usar `keyboard/keypress` (secuencial, tono medio) para el typing, `interface/error` seco para el rojo, un click/soft-thump por tarjeta, impact/bong para el lockup. Preferir archivos de bajo riesgo de agudos (ver sfx-analysis).
- SFX analysis guidance: `<brag-skill>/assets/sfx/sfx-analysis.md` / `.json`.
- Exact SFX choice: Hyperframes should choose filenames, timestamps, density, and volume based on the implemented animation.
- Audio files: music already copied to `composition/assets/music/`; copy any Hyperframes-selected SFX into `composition/assets/`.

## Hyperframes Instructions
Load the composition-building Hyperframes domain skills — `hyperframes-core` (composition contract + `data-*` timing), `hyperframes-animation` (motion), `hyperframes-creative` (design spec, beats, audio-reactive), `hyperframes-keyframes` (seek-safe keyframes), and `hyperframes-cli` (lint/check/render). /brag is its own workflow: do not enter the `hyperframes` entry-point intent interview and do not route to its generic promo / launch-video workflow. Prefer native Hyperframes conventions over anything in `/brag`.

Requirements:
- Show at least one real UI, copy, or visual element from the source project (la card-terminal del hero).
- Keep all text readable in the final render (hold floors: label ~0.8s, oración ~0.3s/palabra).
- Keep the video within 15-25s (18s plan).
- Include the planned music/SFX layer.
- Treat `/brag` audio notes as guidance, not a fixed cue sheet.
- Major reveals may move toward nearby strong cues within ±0.15s; sequential cards snap to beats ±0.10s; no more than 1-3 strong cue locks (aquí: 3 tarjetas + asiento de logo si no daña el ritmo).
- Honor the music fade-out and let the final logo SFX ring over it.
- Audio-reactive: extraer datos de audio y cablear glow del CTA/card a RMS (workflow de `hyperframes-creative`; si falta helper/ffmpeg, documentarlo y seguir sin bloquear el render).
- Use local assets for audio (music already at `composition/assets/music/`).
- Run `hyperframes check` before render — it is brag's single gate.

@echo off
setlocal EnableDelayedExpansion
set BASE=C:\Users\Franc\OneDrive\Documentos\Default Project\codecela\brag-servicios
set CLI=C:\Users\Franc\OneDrive\Documentos\Default Project\hyperframes\packages\cli\bin\hyperframes.mjs
set PRELOAD=C:\Users\Franc\AppData\Local\Temp\opencode\hf-debug-preload.js
set TEMP=D:\hf-tmp
set TMP=D:\hf-tmp
set HYPERFRAMES_EXTRACT_CACHE_DIR=D:\hf-tmp\frames
set HFLOG=%BASE%\render.log
del "%HFLOG%" 2>nul
for %%n in (plan0 arranque negocio medida resumen) do (
  pushd "%BASE%\%%n\composition"
  echo ==== RENDER %%n ==== >> "%HFLOG%"
  node --require "%PRELOAD%" "%CLI%" render --quality high --fps 30 --output "D:\hf-tmp\out\%%n.mp4" >> "%HFLOG%" 2>&1
  echo RENDER_EXIT_%%n=!ERRORLEVEL! >> "%HFLOG%"
  popd
)
echo ALL_DONE >> "%HFLOG%"

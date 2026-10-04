@echo off
setlocal EnableDelayedExpansion
set BASE=C:\Users\Franc\OneDrive\Documentos\Default Project\codecela\brag-servicios
set CLI=C:\Users\Franc\OneDrive\Documentos\Default Project\hyperframes\packages\cli\bin\hyperframes.mjs
set TEMP=D:\hf-tmp
set TMP=D:\hf-tmp
set HFLOG=%BASE%\lintcheck.log
del "%HFLOG%" 2>nul
for %%n in (plan0 arranque negocio medida resumen) do (
  pushd "%BASE%\%%n\composition"
  echo ==== %%n LINT ==== >> "%HFLOG%"
  node "%CLI%" lint >> "%HFLOG%" 2>&1
  echo LINT_EXIT_%%n=!ERRORLEVEL! >> "%HFLOG%"
  echo ==== %%n CHECK ==== >> "%HFLOG%"
  node "%CLI%" check --snapshots >> "%HFLOG%" 2>&1
  echo CHECK_EXIT_%%n=!ERRORLEVEL! >> "%HFLOG%"
  popd
)
echo ALL_DONE >> "%HFLOG%"

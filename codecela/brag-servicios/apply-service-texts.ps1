$ErrorActionPreference = "Stop"
$base = "C:\Users\Franc\OneDrive\Documentos\Default Project\codecela\brag-servicios"
$mapPath = Join-Path $base "services-map.json"
# read JSON with explicit UTF8 (PS5.1-safe)
$json = [System.IO.File]::ReadAllText($mapPath, [System.Text.Encoding]::UTF8)
$map = $json | ConvertFrom-Json
$fail = $false
foreach ($prop in $map.PSObject.Properties) {
    $name = $prop.Name
    $path = Join-Path $base "$name\composition\index.html"
    if (-not (Test-Path $path)) { Write-Output "MISSING FILE: $name"; $fail = $true; continue }
    $text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    $ok = 0; $missing = @()
    foreach ($pair in $prop.Value) {
        $idx = $text.IndexOf($pair.old, [System.StringComparison]::Ordinal)
        if ($idx -lt 0) { $missing += $pair.old; continue }
        $text = $text.Replace($pair.old, $pair.new)
        $ok++
    }
    $enc = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($path, $text, $enc)
    if ($missing.Count -gt 0) {
        Write-Output "[$name] APPLIED $ok, MISSING $($missing.Count):"
        foreach ($m in $missing) { Write-Output "   NOT FOUND: $m" }
        $fail = $true
    } else {
        Write-Output "[$name] OK - $ok replacements applied"
    }
}
if ($fail) { exit 1 } else { Write-Output "ALL DONE" }

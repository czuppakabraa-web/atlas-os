# ============================================================
# Atlas OS - Audit ZIP Creator
# Creates a clean ZIP package for ChatGPT / code reviews
# ============================================================

Clear-Host

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "         Atlas OS Audit ZIP Creator"
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# ------------------------------------------------------------
# Project paths
# ------------------------------------------------------------

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$TempFolder = Join-Path $env:TEMP "Atlas_Audit_Temp"

# ------------------------------------------------------------
# Read version from package.json
# ------------------------------------------------------------

$PackageJson = Get-Content "$Root\package.json" -Raw | ConvertFrom-Json
$Version = $PackageJson.version

# ------------------------------------------------------------
# Current date
# ------------------------------------------------------------

$Date = Get-Date -Format "yyyy-MM-dd"

# ------------------------------------------------------------
# Output filename
# ------------------------------------------------------------

$OutputName = "Atlas_v$Version`_$Date.zip"

# ------------------------------------------------------------
# Cleanup
# ------------------------------------------------------------

if (Test-Path $TempFolder) {
    Remove-Item $TempFolder -Recurse -Force
}

if (Test-Path "$Root\$OutputName") {
    Remove-Item "$Root\$OutputName" -Force
}

# ------------------------------------------------------------
# Copy project
# ------------------------------------------------------------

Write-Host "Copying project..." -ForegroundColor Yellow

Copy-Item `
    -Path $Root `
    -Destination $TempFolder `
    -Recurse

# ------------------------------------------------------------
# Remove folders
# ------------------------------------------------------------

Write-Host "Removing unnecessary folders..." -ForegroundColor Yellow

$FoldersToDelete = @(
    ".git",
    "node_modules",
    ".expo",
    ".vscode",
    ".claude",
    "dist",
    "build",
    ".next",
    ".turbo",
    ".idea",
    "coverage"
)

foreach ($folder in $FoldersToDelete) {

    Get-ChildItem `
        $TempFolder `
        -Directory `
        -Recurse `
        -Force `
    | Where-Object {
        $_.Name -eq $folder
    } | Remove-Item `
        -Recurse `
        -Force `
        -ErrorAction SilentlyContinue

}

# ------------------------------------------------------------
# Remove files
# ------------------------------------------------------------

Write-Host "Removing unnecessary files..." -ForegroundColor Yellow

$FilePatterns = @(
    "*.log",
    "*.tmp",
    "*.tsbuildinfo"
)

foreach ($pattern in $FilePatterns) {

    Get-ChildItem `
        $TempFolder `
        -File `
        -Recurse `
        -Force `
        -Filter $pattern `
    | Remove-Item `
        -Force `
        -ErrorAction SilentlyContinue

}

# ------------------------------------------------------------
# Create ZIP
# ------------------------------------------------------------

Write-Host "Creating ZIP..." -ForegroundColor Yellow

Compress-Archive `
    -Path "$TempFolder\*" `
    -DestinationPath "$Root\$OutputName" `
    -CompressionLevel Optimal

# ------------------------------------------------------------
# Cleanup
# ------------------------------------------------------------

Remove-Item `
    $TempFolder `
    -Recurse `
    -Force

# ------------------------------------------------------------
# Done
# ------------------------------------------------------------

Write-Host ""
Write-Host "==========================================" -ForegroundColor Green
Write-Host "              FINISHED"
Write-Host "==========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Created file:" -ForegroundColor Cyan
Write-Host "$OutputName" -ForegroundColor White
Write-Host ""
Write-Host "Location:" -ForegroundColor Cyan
Write-Host "$Root\$OutputName"
Write-Host ""
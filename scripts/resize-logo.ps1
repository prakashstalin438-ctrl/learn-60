Add-Type -AssemblyName System.Drawing

$srcPath = "D:\GEN AI STUDY TRACKER\public\logo.png"
if (-not (Test-Path $srcPath)) {
    Write-Error "Source image not found: $srcPath"
    exit 1
}

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Host "Original Image Loaded: $($src.Width)x$($src.Height)"

$iconsDir = "D:\GEN AI STUDY TRACKER\public\icons"
if (-not (Test-Path $iconsDir)) {
    New-Item -ItemType Directory -Path $iconsDir -Force
}

# Standard "any" sizes
$sizes = @(
    @{ w = 192; h = 192; path = "D:\GEN AI STUDY TRACKER\public\icons\icon-192.png" },
    @{ w = 512; h = 512; path = "D:\GEN AI STUDY TRACKER\public\icons\icon-512.png" },
    @{ w = 180; h = 180; path = "D:\GEN AI STUDY TRACKER\public\icons\apple-touch-icon.png" },
    @{ w = 64;  h = 64;  path = "D:\GEN AI STUDY TRACKER\public\favicon-64.png" },
    @{ w = 32;  h = 32;  path = "D:\GEN AI STUDY TRACKER\public\favicon-32.png" },
    @{ w = 32;  h = 32;  path = "D:\GEN AI STUDY TRACKER\public\favicon.png" }
)

foreach ($item in $sizes) {
    $bmp = New-Object System.Drawing.Bitmap($item.w, $item.h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    
    $g.DrawImage($src, 0, 0, $item.w, $item.h)
    $bmp.Save($item.path, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    
    $fileInfo = Get-Item $item.path
    Write-Host "Generated: $($item.path) ($($item.w)x$($item.h), $($fileInfo.Length) bytes)"
}

# Maskable Icons (with safe 12% padding on background to prevent Android adaptive icon cropping)
$bgSampleColor = $src.GetPixel(10, 10)
$maskableSizes = @(
    @{ w = 512; h = 512; path = "D:\GEN AI STUDY TRACKER\public\icons\icon-maskable-512.png" },
    @{ w = 192; h = 192; path = "D:\GEN AI STUDY TRACKER\public\icons\icon-maskable-192.png" }
)

foreach ($m in $maskableSizes) {
    $bmp = New-Object System.Drawing.Bitmap($m.w, $m.h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $brush = New-Object System.Drawing.SolidBrush($bgSampleColor)
    $g.FillRectangle($brush, 0, 0, $m.w, $m.h)
    $brush.Dispose()

    # Scale to 80% to fit within the Android maskable safe circle zone
    $innerW = [int]($m.w * 0.80)
    $innerH = [int]($m.h * 0.80)
    $offsetX = [int](($m.w - $innerW) / 2)
    $offsetY = [int](($m.h - $innerH) / 2)

    $g.DrawImage($src, $offsetX, $offsetY, $innerW, $innerH)
    $bmp.Save($m.path, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()

    $fileInfo = Get-Item $m.path
    Write-Host "Generated Maskable: $($m.path) ($($m.w)x$($m.h), $($fileInfo.Length) bytes)"
}

# Generate favicon.ico (using 32x32 bitmap)
$bmp32 = New-Object System.Drawing.Bitmap("D:\GEN AI STUDY TRACKER\public\favicon-32.png")
$icoH = $bmp32.GetHicon()
$ico = [System.Drawing.Icon]::FromHandle($icoH)
$fs = [System.IO.File]::Open("D:\GEN AI STUDY TRACKER\public\favicon.ico", [System.IO.FileMode]::Create)
$ico.Save($fs)
$fs.Close()
$bmp32.Dispose()
Write-Host "Generated: D:\GEN AI STUDY TRACKER\public\favicon.ico"

# Generate favicon.svg containing base64 of official logo
$bytes = [System.IO.File]::ReadAllBytes("D:\GEN AI STUDY TRACKER\public\favicon-64.png")
$b64 = [Convert]::ToBase64String($bytes)
$svgContent = @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <image href="data:image/png;base64,$b64" width="64" height="64" />
</svg>
"@
[System.IO.File]::WriteAllText("D:\GEN AI STUDY TRACKER\public\favicon.svg", $svgContent)
Write-Host "Updated D:\GEN AI STUDY TRACKER\public\favicon.svg with official logo data"

$src.Dispose()
Write-Host "All branding assets generated successfully!"

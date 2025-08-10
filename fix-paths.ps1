# PowerShell script to fix CSS and logo paths in product detail pages

# Fix IGBT modules (3 levels deep)
Get-ChildItem -Path "products\power\igbt-module\*.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace 'href="/assets/css/style.css"', 'href="../../../assets/css/style.css"'
    $content = $content -replace 'src="/assets/images/logo.svg"', 'src="../../../assets/images/litong-logo.svg"'
    $content = $content -replace 'Core-Tek', 'LiTong Group'
    Set-Content -Path $_.FullName -Value $content
    Write-Host "Fixed: $($_.Name)"
}

# Fix Smart Control ICs (2 levels deep)
Get-ChildItem -Path "products\smart-control-ics\*.html" -Exclude "index.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace 'href="/assets/css/style.css"', 'href="../../assets/css/style.css"'
    $content = $content -replace 'src="/assets/images/logo.svg"', 'src="../../assets/images/litong-logo.svg"'
    $content = $content -replace 'Core-Tek', 'LiTong Group'
    Set-Content -Path $_.FullName -Value $content
    Write-Host "Fixed: $($_.Name)"
}

# Fix Smart Sensors (2 levels deep)
Get-ChildItem -Path "products\smart-sensors\*.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace 'href="/assets/css/style.css"', 'href="../../assets/css/style.css"'
    $content = $content -replace 'src="/assets/images/logo.svg"', 'src="../../assets/images/litong-logo.svg"'
    $content = $content -replace 'Core-Tek', 'LiTong Group'
    Set-Content -Path $_.FullName -Value $content
    Write-Host "Fixed: $($_.Name)"
}

# Fix Optoelectronic (2 levels deep)
Get-ChildItem -Path "products\optoelectronic\*.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace 'href="/assets/css/style.css"', 'href="../../assets/css/style.css"'
    $content = $content -replace 'src="/assets/images/logo.svg"', 'src="../../assets/images/litong-logo.svg"'
    $content = $content -replace 'Core-Tek', 'LiTong Group'
    Set-Content -Path $_.FullName -Value $content
    Write-Host "Fixed: $($_.Name)"
}

Write-Host "All product detail pages have been fixed!"
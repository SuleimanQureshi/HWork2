# Extract raw bytes from PDF and show text content
function Get-PdfText($path) {
    $bytes = [System.IO.File]::ReadAllBytes($path)
    $text = [System.Text.Encoding]::Latin1.GetString($bytes)
    # Extract text between BT and ET blocks
    $matches = [regex]::Matches($text, 'BT[\s\S]*?ET')
    $output = @()
    foreach ($m in $matches) {
        $inner = $m.Value
        # Get content in parentheses (Tj, TJ operators)
        $parts = [regex]::Matches($inner, '\(([^)]*)\)')
        foreach ($p in $parts) {
            $val = $p.Groups[1].Value.Trim()
            if ($val.Length -gt 0) { $output += $val }
        }
    }
    return ($output -join ' ')
}

Write-Host "=== COOKIES POLICY ===" 
Get-PdfText "NEW Cookies Policy.pdf"
Write-Host ""
Write-Host "=== PRIVACY POLICY ==="
Get-PdfText "NEW Privacy Policy - MP.pdf"

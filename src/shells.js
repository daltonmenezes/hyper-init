exports.KNOWN_SHELLS = {
  powershell: { separator: '; ', clearCommand: 'Clear-Host' },
  node: { separator: '; ', clearCommand: 'console.clear();' },
  cmd: { separator: ' & ', clearCommand: 'cls' },
  fish: { separator: ' & ', clearCommand: 'clear' },
  nu: { separator: ' && ', clearCommand: 'printf "\\\\033[H"' },
  zsh: { separator: ' && ', clearCommand: 'clear' },
  fallback: { separator: ' && ', clearCommand: 'printf "\\033[H"' },
}

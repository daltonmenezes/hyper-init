const Path = require('path')

const KNOWN_SHELLS = {
	powershell: { separator: '; ', clearCommand: 'Clear-Host' },
	node: { separator: '; ', clearCommand: 'console.clear();' },
	cmd: { separator: ' & ', clearCommand: 'cls' },
  fish: { separator: ' & ', clearCommand: 'clear'},
	fallback: { separator: ' && ', clearCommand: 'printf "\\033[H"' },
}

exports.getSeparator = (browserWindow, uid) => {
	let shellName = Path.parse(browserWindow.sessions.get(uid).shell).name.toLowerCase() || null
	return KNOWN_SHELLS[shellName] ? KNOWN_SHELLS[shellName].separator : KNOWN_SHELLS.fallback.separator // Separator not found
}

exports.getClearCommand = (browserWindow, uid) => {
	let shellName = Path.parse(browserWindow.sessions.get(uid).shell).name.toLowerCase() || null
  return KNOWN_SHELLS[shellName] ? KNOWN_SHELLS[shellName].clearCommand : KNOWN_SHELLS['fallback'].clearCommand // Command not found
}
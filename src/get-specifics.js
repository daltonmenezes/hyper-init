const Path = require('path')

const KNOWN_SEPARATORS = {
	powershell: '; ',
	node: '; ',
	cmd: ' & ',
	fallback: ' && ',
}

exports.getSeparator = (browserWindow, uid) => {
	let shellName = Path.parse(browserWindow.sessions.get(uid).shell).name.toLowerCase()
	return KNOWN_SEPARATORS[shellName] || KNOWN_SEPARATORS['fallback'] // Separator not found
}

exports.getClearScreen = ( ) => { }
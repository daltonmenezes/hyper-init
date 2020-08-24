const { KNOWN_SHELLS } = require('./shells')
const Path = require('path')

exports.getSeparator = (browserWindow, uid) => {
  let shellName =
    Path.parse(browserWindow.sessions.get(uid).shell).name.toLowerCase() || null

  return KNOWN_SHELLS[shellName]
    ? KNOWN_SHELLS[shellName].separator
    : KNOWN_SHELLS.fallback.separator // Separator not found
}

exports.getClearCommand = (browserWindow, uid) => {
  let shellName =
    Path.parse(browserWindow.sessions.get(uid).shell).name.toLowerCase() || null

  return KNOWN_SHELLS[shellName]
    ? KNOWN_SHELLS[shellName].clearCommand
    : KNOWN_SHELLS['fallback'].clearCommand // Command not found
}

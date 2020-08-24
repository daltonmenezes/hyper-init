const { KNOWN_SHELLS } = require('./shells')
const { getShellName } = require('./get-shell-name')

exports.getSeparator = (browserWindow, uid) => {
  const shellName = getShellName({ browserWindow, uid })

  return KNOWN_SHELLS[shellName]
    ? KNOWN_SHELLS[shellName].separator
    : KNOWN_SHELLS.fallback.separator // Separator not found
}

exports.getClearCommand = (browserWindow, uid) => {
  const shellName = getShellName({ browserWindow, uid })

  return KNOWN_SHELLS[shellName]
    ? KNOWN_SHELLS[shellName].clearCommand
    : KNOWN_SHELLS['fallback'].clearCommand // Command not found
}

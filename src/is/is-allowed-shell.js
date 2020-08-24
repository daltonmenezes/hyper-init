const { getShellName } = require('../get-shell-name')

exports.isAllowedShell = (props) => {
  const { init, key, app, uid } = props

  const shellName = getShellName({ browserWindow: app, uid })
  const restrictions = init[key].allowedShells
  const isEmptyArray = restrictions && restrictions.length === 0

  const shouldAllow =
    !restrictions || isEmptyArray || restrictions.includes(shellName)

  return shouldAllow ? true : false
}

const { numberOfWindows } = require('../number-of-windows')

exports.isNewWindow = (terminal) =>
  !terminal.splitDirection &&
  Object.keys(terminal).length <= 2 &&
  numberOfWindows() > 2

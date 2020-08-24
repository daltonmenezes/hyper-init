const { numberOfWindows } = require('../number-of-windows')

exports.isOnce = (terminal) =>
  numberOfWindows() <= 2 && Object.keys(terminal).length <= 2

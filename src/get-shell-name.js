const { parse } = require('path')

exports.getShellName = ({ browserWindow, uid }) =>
  parse(browserWindow.sessions.get(uid).shell).name.toLowerCase() || null

const { isTab } = require('../is/is-tab')

exports.onTabsRule = ({ app, uid, terminal, cmd }) =>
  isTab(terminal) && !terminal.splitDirection
    ? app.sessions.get(uid).write(`${cmd}\r`)
    : ''

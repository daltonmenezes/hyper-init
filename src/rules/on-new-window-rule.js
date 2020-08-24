const { isNewWindow } = require('../is/is-new-window')

exports.onNewWindowRule = ({ app, uid, terminal, cmd }) =>
  isNewWindow(terminal) ? app.sessions.get(uid).write(`${cmd}\r`) : ''

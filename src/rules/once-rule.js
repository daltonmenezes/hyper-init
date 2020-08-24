const { isOnce } = require('../is/is-once')

exports.onceRule = ({ app, uid, terminal, cmd }) =>
  isOnce(terminal) ? app.sessions.get(uid).write(`${cmd}\r`) : ''

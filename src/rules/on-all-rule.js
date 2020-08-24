exports.onAllRule = ({ app, uid, cmd }) =>
  app.sessions.get(uid).write(`${cmd}\r`)

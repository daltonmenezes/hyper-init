exports.onSplittedWindowsRule = ({ app, uid, cmd, terminal }) =>
  !!terminal.splitDirection ? app.sessions.get(uid).write(`${cmd}\r`) : ''

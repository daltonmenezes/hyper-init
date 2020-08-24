exports.clearBuffer = ({ app, uid }, cmd = 'printf "\\033[H"') =>
  app.sessions.get(uid).write(`${cmd} \r`)

exports.isTab = (terminal) =>
  terminal.uid
    ? !terminal[terminal.uid].direction && Object.keys(terminal.tabs).length > 1
    : ''

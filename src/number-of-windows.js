const { BrowserWindow } = require('electron')

exports.numberOfWindows = () => BrowserWindow.getAllWindows().length

'use strict'

const { rulesHandler } = require('./src/rules/rules-handler')
const { clearBuffer } = require('./src/clear-buffer')
const { joinCommands } = require('./src/join-commands')
const { getSeparator } = require('./src/get-specifics')
const { getClearCommand } = require('./src/get-specifics')
const waitFor = require('./src/wait-for')

const init = {}
const terminal = {}

let clearCommand
let commandSeparator

exports.onApp = ({ config }) => {
  clearCommand = config.getConfig().clearCommand || undefined
  commandSeparator = config.getConfig().commandSeparator || undefined

  Object.assign(init, config.getConfig().init)
}

exports.getTabProps = (uid, parentProps, props) =>
  Object.assign(terminal, uid, { tabs: parentProps.tabs }) &&
  Object.assign({}, props)

exports.reduceTermGroups = (reducer) =>
  Object.assign(terminal, reducer.termGroups) && reducer

exports.middleware = () => (next) => (action) => {
  if (action.type === 'SESSION_ADD') {
    Object.assign(terminal, { splitDirection: action.splitDirection })
  }

  next(action)
}

exports.onWindow = (browserWindow) => {
  browserWindow.rpc.on('hyper-init execute commands', ({ uid, terminal }) => {
    if (commandSeparator === undefined) {
      commandSeparator = getSeparator(browserWindow, uid)
    }

    if (clearCommand === undefined) {
      clearCommand = getClearCommand(browserWindow, uid)
    }

    clearBuffer({ app: browserWindow, uid }, clearCommand)

    Object.keys(init).map((key) => {
      let cmd = joinCommands(init[key].commands, commandSeparator)

      rulesHandler({ init, key, cmd, app: browserWindow, uid, terminal })
    })
  })
}

exports.onRendererWindow = (app) =>
  waitFor(app, 'rpc', (rpc) =>
    rpc.on('session add', ({ uid }) =>
      rpc.emit('hyper-init execute commands', { uid, terminal })
    )
  )

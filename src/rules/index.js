const { onceRule } = require('./once-rule')
const { onNewWindowRule } = require('./on-new-window-rule')
const { onSplittedWindowsRule } = require('./on-splitted-windows-rule')
const { onTabsRule } = require('./on-tabs-rule')
const { onAllRule } = require('./on-all-rule')

module.exports = {
  once: onceRule,
  windows: onNewWindowRule,
  splitted: onSplittedWindowsRule,
  tabs: onTabsRule,
  all: onAllRule,
}

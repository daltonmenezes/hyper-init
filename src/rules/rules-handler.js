const rules = require('./index')
const { isRule } = require('../is/is-rule')
const { isAllowedShell } = require('../is/is-allowed-shell')

exports.rulesHandler = (...[props]) => {
  const rule = props.init[props.key].rule

  if (!isAllowedShell(props)) return

  if (Array.isArray(rule)) {
    return rule.map((rule) => (isRule(rule) ? rules[rule](props) : ''))
  }

  return isRule(rule) ? rules[rule](props) : ''
}

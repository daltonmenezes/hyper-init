const rules = require('./index')
const { isRule } = require('../is/is-rule')

exports.rulesHandler = (...[props]) => {
  const rule = props.init[props.key].rule

  if (Array.isArray(rule)) {
    return rule.map((rule) => (isRule(rule) ? rules[rule](props) : ''))
  }

  return isRule(rule) ? rules[rule](props) : ''
}

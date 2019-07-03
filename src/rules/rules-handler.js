const rules = require('./index')
const { isRule } = require('../is/is-rule')

exports.rulesHandler = (...[props]) => {
	const rule = props.init[props.key].rule
	
	Array.isArray(rule)
		? rule.map(rule => isRule(rule) ? rules[rule](props) : '')
		: ''
	
	isRule(rule)
		? rules[rule](props)
		: ''
}
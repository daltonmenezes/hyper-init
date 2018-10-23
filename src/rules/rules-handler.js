const rules = require('./index')

exports.rulesHandler = (...[props]) => {
	const rule = props.init[props.key].rule

	if (rule in rules)
			rules[rule](props)
}
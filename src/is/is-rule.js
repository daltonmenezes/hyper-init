const rules = require('../rules/index')

exports.isRule = (rule) => rule in rules

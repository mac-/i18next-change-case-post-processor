const changeCase = require('change-case')

const AVAILABLE_METHODS = [
    'camelCase',
    'constantCase',
    'dotCase',
    'headerCase',
    'lowerCase',
    'lowerCaseFirst',
    'noCase',
    'paramCase',
    'pascalCase',
    'pathCase',
    'sentenceCase',
    'snakeCase',
    'swapCase',
    'titleCase',
    'upperCase',
    'upperCaseFirst',
]

const changeCasePostProcessor = {
    getAvailableMethods: () => AVAILABLE_METHODS.slice(0),
    changeCase: {
        name: 'changeCase',
        type: 'postProcessor',
        process: (value, key, { method } = {}) => {
            if (!method || !AVAILABLE_METHODS.includes(method)) {
                return value
            }
            return changeCase[method](value)
        }
    }
}

AVAILABLE_METHODS.forEach((method) => {
    changeCasePostProcessor[method] = {
        name: method,
        type: 'postProcessor',
        process: (value) => changeCase[method](value)
    }
})

module.exports = changeCasePostProcessor

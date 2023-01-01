const path = require('path')
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'prettier',
        path.resolve(__dirname, 'linting/.eslintrc-import.js'),
        path.resolve(__dirname, 'linting/.eslintrc-main.js'),
    ],
}

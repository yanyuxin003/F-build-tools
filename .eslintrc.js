module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': ['airbnb', 'plugin:prettier/recommended'],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'react/prop-types': [0],
    'react/destructuring-assignment': [0, 'always'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
    }
}

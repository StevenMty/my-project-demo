module.exports = {
    root: true,
    extends: 'airbnb-base',
    plugins: [
        'html'
    ],
    globals: {
        'Vue': true,
        'alert': true,
        '$': true,
        'Draggable': true,
        'VerifyCode': true,
        'Qiniu': true,
        'qq': true,
        'calculate': true,
        'eval': true,
        'amd': true,
        'wx':true,
        'OSS':true
    },
    evn: {
        'amd': true
    },
    rules: {
        'arrow-parens': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'space-before-function-paren': [0, 'never'],
        'indent': 0,
        'eol-last': 0,
        'spaced-comment': [2, "always"],
        'comma-spacing': [2, {
            "before": false,
            "after": true
        }],
        'no-trailing-spaces': [2, {
            "skipBlankLines": true
        }],
        'space-infix-ops': 0,
        'key-spacing': [0, {
            "beforeColon": false,
            "afterColon": true
        }],
        'quotes': [1, "single"],
        'padded-blocks': 0,
        'space-before-blocks': [2, 'always'],
        'eqeqeq': 2,
        'no-trailing-spaces': 1,
        'no-multiple-empty-lines': 2,
        'space-before-blocks': 0,
        'no-return-assign': 0,
        'no-mixed-spaces-and-tabs': 0,
        //modiy airbnb
        'no-restricted-syntax': 0,
        'consistent-return': 0,
        'no-unused-expressions': 0,
        'no-underscore-dangle': 0,
        'no-param-reassign': 0,
        'comma-dangle': 0,
        'no-nested-ternary': 0,
        'no-unused-vars': 0,
        'import/no-unresolved': 0,
        'prefer-template': 0,
        'max-len': 0,
        'keyword-spacing': 0,
        'prefer-rest-params': 0,
        'no-useless-escape': 0,
        'semi': 0,
        'arrow-parens': 0,
        'no-else-return': 0,
        'guard-for-in':0,
        'no-shadow':0,
        'no-alert':0,
        'quote-props':0,
        'no-console':0,
        'no-unneeded-ternary':0,
        'no-confusing-arrow':0,
        'no-tabs':'off',
    }
}
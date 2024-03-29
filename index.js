module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {
        "@typescript-eslint/array-type":                    ["error", {default: 'array-simple'}],
        "@typescript-eslint/consistent-type-definitions":   ["error", "type"],
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/interface-name-prefix":         "off",
        "@typescript-eslint/no-array-constructor":          "off",
        "@typescript-eslint/no-extraneous-class":           ["error", { "allowConstructorOnly": true }],
        "@typescript-eslint/no-require-imports":            "error",
        "@typescript-eslint/no-unnecessary-condition":      "error",
        "@typescript-eslint/no-unnecessary-qualifier":      "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unused-vars":                "error",
        "@typescript-eslint/prefer-function-type":          "error",
        "@typescript-eslint/prefer-namespace-keyword":      "off",
        "@typescript-eslint/prefer-readonly":               "error",
        "@typescript-eslint/promise-function-async":        "error",
        "@typescript-eslint/restrict-plus-operands":        "error",
        "@typescript-eslint/unbound-method":                "off",
        "no-await-in-loop":                                 "error",
        "no-console":                                       "error",
        "no-import-assign":                                 "error",
        "default-case":                                     "error",
        "default-param-last":                               "error",
        "eqeqeq":                                           "error",
        "no-alert":                                         "error",
        "no-caller":                                        "error",
        "no-else-return":                                   "error",
        "no-empty-function":                                "error",
        "no-eq-null":                                       "error",
        "no-eval":                                          "error",
        "no-floating-decimal":                              "error",
        "no-implied-eval":                                  "error",
        "no-lone-blocks":                                   "error",
        "no-multi-str":                                     "error",
        "no-new":                                           "error",
        "no-new-func":                                      "error",
        "no-octal-escape":                                  "error",
        "no-param-reassign":                                "error",
        "no-proto":                                         "error",
        "no-return-assign":                                 "error",
        "no-self-compare":                                  "error",
        "no-sequences":                                     "error",
        "no-throw-literal":                                 "error",
        "no-unused-expressions":                            "error",
        "no-useless-call":                                  "error",
        "prefer-regex-literals":                            "error",
        "require-await":                                    "error",
        "yoda":                                             "error",
        "no-shadow":                                        "error",
        "no-undef-init":                                    "error",
        "no-undefined":                                     "error",
        "no-use-before-define":                             "error",
        "arrow-body-style":                                 ["error", "always"],
        "arrow-parens":                                     ["error", "always"],
        "no-duplicate-imports":                             "error",
        "no-useless-computed-key":                          "error",
        "no-var":                                           "error",
        "prefer-arrow-callback":                            "error",
        "prefer-const":                                     "error",
        "prefer-spread":                                    "error",
        "prefer-template":                                  "error",
        "sort-imports": ["error", {
            "ignoreCase": false,
            "ignoreDeclarationSort": false,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
        }]
    }
};

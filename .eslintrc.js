module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: [
		'next',
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'@next/next/no-page-custom-font': 'off',
		'no-unused-vars': 'off',
	},
};

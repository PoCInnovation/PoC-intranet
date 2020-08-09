module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		project: './tsconfig.json',
	},
	extends: [
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	rules: {
		'@typescript-eslint/ban-ts-comment': 0,
	},
	overrides: [
		{
			files: ['./src/integrations/airtable/AirtableSDK.ts'],
			rules: {
				'@typescript-eslint/no-explicit-any': 0,
			},
		},
	],
};

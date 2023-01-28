module.exports = {
	extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
	plugins: ['stylelint-selector-bem-pattern'],
	rules: {
		'plugin/selector-bem-pattern': {
			preset: 'bem',
			implicitComponents: 'src/components/**/*.scss',
			componentName: /^[A-Z][a-zA-Z]*$/,
			componentSelectors: (componentName) =>
				new RegExp(
					`^\\.${componentName
						.split('')
						.map((char, index) =>
							char === char.toLowerCase()
								? char
								: index === 0
								? char.toLowerCase()
								: `-${char.toLowerCase()}`
						)
						.join('')}((--|__)[a-z-]+)?$`
				),
		},
	},
};

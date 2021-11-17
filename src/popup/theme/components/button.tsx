export default {
	baseStyle: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		borderRadius: 'base', // <-- border radius is same for all variants and sizes
	},

	sizes: {
		sm: {
			field: {
				height: 8,
				borderRadius: '4px',
				boxShadow: '4px 4px 0px #B1B1B1',
			},
		},

		md: {
			field: {
				borderRadius: '4px',
				height: 12,
				fontSize: 'md',
				boxShadow: '4px 4px 0px #B1B1B1',
			},
		},

		lg: {
			field: {
				height: 16,
				borderRadius: '6px',
				fontSize: 'lg',
				boxShadow: '4px 4px 0px #B1B1B1',
			},
		},

		xl: {
			field: {
				height: { base: 16, lg: 20 },
				borderRadius: '6px',
				fontSize: { base: 'lg', lg: 'xl' },
				px: { base: 3, lg: 5 },
				boxShadow: '4px 4px 0px #B1B1B1',
			},
		},

		'2xl': {
			field: {
				height: 24,
				borderRadius: 'none',
				fontSize: '2xl',
				px: 5,
				boxShadow: '4px 4px 0px #B1B1B1',
			},
		},
	},

	variants: {
		pill: {
			// bg: 'blue.100',
			// bg: 'white',
			bg: 'gray.100',
			// boxShadow: '0 0 2px 2px rgba(0,0,0,0.1)',
			borderRadius: '20px',
			color: 'gray.400',
		},
		solid: (props: any) => ({
			bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
		}),
		outline: {
			field: {
				border: '2px solid',
				_focus: {
					borderColor: '#9280FF',
					boxShadow: 'none',
				},
			},
		},
		yourVariant: {
			field: {
				border: '3px solid',
				borderColor: '#130080',
				_focus: {
					borderColor: '#9280ff',
					boxShadow: 'none',
				},
			},
		},
	},
	// The default size and variant values
	defaultProps: {
		size: 'md',
		variant: 'outline',
	},
}

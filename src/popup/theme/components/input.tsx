export default {
	baseStyle: {
		field: {
			// bg: 'red',
			// borderColor: 'grey.200',
			// borderWidth: 3,
			// ':focus': {
			// 	borderColor: '#a970ff',
			// 	bg: '#000',
			// },
		},
	},
	// baseStyle: {
	// 	backgroundColor: 'red',
	// 	field: {
	// 		fontWeight: 400,
	// 		borderColor: 'red',
	// 		// borderColor: 'gray.400',
	// 		backgroundColor: '#444',
	// 	},
	// },

	// sizes: {
	// 	sm: {
	// 		field: {
	// 			height: 8,
	// 			borderRadius: '4px',
	// 			boxShadow: '4px 4px 0px #B1B1B1',
	// 		},
	// 	},

	// 	md: {
	// 		field: {
	// 			borderRadius: '12px',
	// 			height: 12,
	// 			fontSize: 'md',
	// 			// bg: 'grey.200',
	// 			boxShadow: '4px 4px 0px #B1B1B1',
	// 			borderColor: 'gray.400',
	// 			backgroundColor: 'red',
	// 		},
	// 	},

	// 	lg: {
	// 		field: {
	// 			height: 16,
	// 			borderRadius: '6px',
	// 			fontSize: 'lg',
	// 			boxShadow: '4px 4px 0px #B1B1B1',
	// 		},
	// 	},

	// 	xl: {
	// 		field: {
	// 			height: { base: 16, lg: 20 },
	// 			borderRadius: '6px',
	// 			fontSize: { base: 'lg', lg: 'xl' },
	// 			px: { base: 3, lg: 5 },
	// 			boxShadow: '4px 4px 0px #B1B1B1',
	// 		},
	// 	},

	// 	'2xl': {
	// 		field: {
	// 			height: 24,
	// 			borderRadius: 'none',
	// 			fontSize: '2xl',
	// 			px: 5,
	// 			boxShadow: '4px 4px 0px #B1B1B1',
	// 		},
	// 	},
	// },

	variants: {
		default: {
			field: {
				height: 12,
				// bg: 'gray.200',
				bg: 'white',
				fontWeight: '500',
				border: '2px solid',
				// borderColor: '#130080',
				borderRadius: '28px',
				borderColor: 'gray.100',
				_focus: {
					borderColor: '#9280ff',
					boxShadow: 'none',
				},
				'::placeholder': {
					color: 'gray.500',
				},
			},
		},
	},
	defaultProps: {
		size: 'md',
		variant: 'default',
	},
}

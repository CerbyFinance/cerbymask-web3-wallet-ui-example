import { extendTheme } from '@chakra-ui/react'
import Button from './components/button'
import Input from './components/input'

const theme = extendTheme({
	config: {
		initialColorMode: 'light',
		useSystemColorMode: false,
	},
	fonts: {
		heading: 'Montserrat',
		body: 'Montserrat',
	},
	colors: {
		// brand: {
		// 	100: '#000',
		// 	900: '#1a202c',
		// },
		// gray: {
		// 	100: '#fafafa',
		// 	200: '#f7f7f7',
		// },
	},
	components: {
		Button,
		Input,
	},
})

export default theme

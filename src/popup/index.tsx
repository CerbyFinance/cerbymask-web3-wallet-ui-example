import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { browser } from 'webextension-polyfill-ts'
import { Popup } from './Popup'
import {
	Box,
	ChakraProvider,
	Grid,
	Container,
	Stack,
	Heading,
	Text,
	Button,
	useColorMode,
	// ColorModeScript,
} from '@chakra-ui/react'
// import theme from './theme'

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
	ReactDOM.render(
		<>
			{/* {console.log('99', ColorModeScript)} */}
			{/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
			<Popup />
		</>,
		document.getElementById('popup')
	)
})

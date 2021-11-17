import { Box, Center, Heading } from '@chakra-ui/layout'
import { useColorMode, Button } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'

export const Hello: FunctionComponent = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	console.log('c ', colorMode)
	return (
		<Box>
			<Center>
				<Heading size="m" mt={3}>
					Example Extension
				</Heading>

				<Box>
					<Button onClick={toggleColorMode}>
						Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
					</Button>
				</Box>
			</Center>
		</Box>
	)
}

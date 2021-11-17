import React, { FunctionComponent } from 'react'
import theme from './theme'
import {
	Box,
	ChakraProvider,
} from '@chakra-ui/react'
import { Header } from '@src/components/header/component'
import { Body } from '@src/components/body/component'
import { ParticleBg } from './particle-bg'

export const Provider: FunctionComponent = () => {
	return (
		<>
			<ChakraProvider theme={theme}>
				<Box
					height={600}
					width={400}
					sx={{
						overflow: 'hidden',
						position: 'relative',
					}}
				>
					<ParticleBg />
					<Header />
					<Body />
				</Box>
			</ChakraProvider>
		</>
	)
}

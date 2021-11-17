import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Flex, Text } from '@chakra-ui/react'

export const Quote = (): JSX.Element => {
	return (
		<>
			<Box
				sx={{
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					paddingX: '50px',
					pointerEvents: 'none',
				}}
			>
				<Box>
					<Text
						bgGradient="linear(to-l, #ffffff, #132350)"
						bgClip="text"
						fontSize="xl"
						fontWeight="extrabold"
						letterSpacing="tight"
						lineHeight="normal"
					>
						The only way of discovering the limits of the possible is to venture
						a little way past them into the impossible.
					</Text>
					<Flex pt="10px" justifyContent="flex-end">
						<Text
							fontWeight="bold"
							fontSize="sm"
							color="#fafafb"
							bgGradient="linear(to-l, #ffffff, #132350)"
							bgClip="text"
						>
							Arthur C. Clarke
						</Text>
					</Flex>
				</Box>
			</Box>
		</>
	)
}

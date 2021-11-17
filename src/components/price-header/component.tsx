import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Box, Grid, Flex } from '@chakra-ui/react'

export const PriceHeader = (): JSX.Element => {
	return (
		<Box
			sx={{
				position: 'absolute',
				bottom: '65px',
				left: '0',
				right: '0',
				height: '52px',
			}}
		>
			<Box
				bg="white"
				borderRadius="6px"
				sx={{ border: '0px solid #e4e4e9' }}
				boxShadow="0 0 1px 2px rgba(216, 216, 255, .2)"
				mb="12px"
				height="100%"
			>
				<Grid templateColumns="repeat(4, 1fr)" height="100%">
					<Flex
						bg="gray.50"
						sx={{
							position: 'relative',
							borderTopLeftRadius: '6px',
							borderBottomLeftRadius: '6px',
							borderRight: '1px solid',
							borderColor: 'gray.100',
						}}
						alignItems="center"
						justifyContent="center"
						_before={{
							content: `""`,
							position: 'absolute',
							height: '2px',
							bottom: '0',
							left: '1px',
							right: '0',
							bg: '#8f81f8',
							borderBottomLeftRadius: '6px',
						}}
					>
						<Box width="24px" height="24px" fontSize="24px" mt="-8px">
							<i className="ri-money-dollar-circle-fill ri-1x" />
						</Box>
					</Flex>
					<Flex
						sx={{ position: 'relative' }}
						alignItems="center"
						justifyContent="center"
					>
						<Box
							width="24px"
							height="24px"
							fontSize="24px"
							mt="-8px"
							color="gray.400"
						>
							<i className="ri-arrow-left-right-fill ri-1x" />
						</Box>
					</Flex>
					<Flex
						sx={{ position: 'relative' }}
						alignItems="center"
						justifyContent="center"
					>
						<Box
							width="24px"
							height="24px"
							fontSize="24px"
							mt="-8px"
							color="gray.400"
						>
							<i className="ri-lightbulb-flash-line ri-1x" />
						</Box>
					</Flex>
					<Flex
						sx={{ position: 'relative' }}
						alignItems="center"
						justifyContent="center"
					>
						<Box
							width="24px"
							height="24px"
							fontSize="24px"
							mt="-8px"
							color="gray.400"
						>
							<i className="ri-settings-4-fill ri-1x" />
						</Box>
					</Flex>
				</Grid>
			</Box>
		</Box>
	)
}

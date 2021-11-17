import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Heading, Text, Image, Box, Grid, Flex } from '@chakra-ui/react'
import { MotionBox } from '@src/components/motion-box/component'

const coins = [
	{ name: 'Radix', coins: '184,050 XRD', image: './images/radix.png' },
	{ name: 'Doge3', coins: '1,000 DCG', image: './images/doge3.png' },
	{ name: 'Bitcoin', coins: '0.3 BTC', image: './images/btc.png' },
]

type ComponentProps = {
	isStaggerOpen: boolean
}

export const CoinsList = ({ isStaggerOpen }: ComponentProps): JSX.Element => {
	return (
		<MotionBox
			initial={false}
			animate={isStaggerOpen ? 'openStagger' : 'closedStagger'}
		>
			<MotionBox
				as="ul"
				pt="30px"
				sx={{ listStyle: 'none' }}
				variants={{
					openStagger: {
						transition: { staggerChildren: 0.07, delayChildren: 0.2 },
					},
					closedStagger: {
						transition: {
							staggerChildren: 0.05,
							staggerDirection: -1,
						},
					},
				}}
			>
				{coins.map((_coin, i) => (
					<MotionBox
						key={i}
						bg="white"
						borderRadius="6px"
						sx={{ border: '0px solid #e4e4e9' }}
						boxShadow="0 0 1px 2px rgba(216, 216, 255, .2)"
						mb="12px"
						as="li"
						variants={{
							openStagger: {
								y: 0,
								opacity: 1,
								transition: {
									y: { stiffness: 1000, velocity: -100 },
								},
							},
							closedStagger: {
								y: 50,
								opacity: 0,
								transition: {
									y: { stiffness: 1000 },
								},
							},
						}}
					>
						<Flex alignItems="center" px="12px" py="12px">
							<Box
								borderRadius="50%"
								overflow="hidden"
								width="28px"
								height="28px"
							>
								<Image
									boxSize="28px"
									objectFit="cover"
									src={_coin.image}
									alt="Segun Adebayo"
								/>
							</Box>
							<Box ml="12px">
								<Heading size="sm" as="h6">
									{_coin.name}
								</Heading>
								<Text mt="0px" fontSize="sm" color="gray.500">
									{_coin.coins}
								</Text>
							</Box>
						</Flex>
					</MotionBox>
				))}
			</MotionBox>
		</MotionBox>
	)
}

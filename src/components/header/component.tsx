import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Flex, Text, IconButton } from '@chakra-ui/react'
import { GlassWrapper } from '@src/components/glass-wrapper/component'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

export const Header = (): JSX.Element => {
	return (
		<>
			<Box
				sx={{
					position: 'absolute',
					top: '-10px',
					left: 0,
					right: 0,
					paddingX: '16px',
					display: 'block',
				}}
			>
				<GlassWrapper flatTop innerSx={{ padding: '0px' }}>
					<Flex px="10px">
						<Box width="30px" />
						<Flex justifyContent="center" height="36px" sx={{ flex: 1 }}>
							<Text
								pt="11px"
								pb="10px"
								lineHeight="16px"
								fontWeight="bold"
								color="gray.400"
								fontSize="sm"
								letterSpacing="tight"
							>
								XRD Wallet (Dlty...BdZz)
							</Text>
						</Flex>
						<Flex width="30px" justifyContent="flex-end" pt="12px">
							<Box
								_before={{
									content: `""`,
									position: 'absolute',
									width: '8px',
									height: '8px',
									top: '2px',
									left: '2px',
									borderRadius: '50%',
									bg:"#14bf14"
								}}
								mr="2px"
								width="12px"
								height="12px"
								sx={{
									backgroundColor: '#d4edd4',
									borderRadius: '50%',
									position: 'relative',
								}}
							></Box>
						</Flex>
					</Flex>
				</GlassWrapper>
			</Box>
		</>
	)
}

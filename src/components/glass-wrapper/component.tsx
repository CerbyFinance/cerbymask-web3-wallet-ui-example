import { Box, Center, Heading } from '@chakra-ui/layout'
import { useColorMode, Button } from '@chakra-ui/react'
import React from 'react'

type ComponentProps = {
	children: any
	flatTop?: boolean
	flatBottom?: boolean
	innerSx?: object
}

export const GlassWrapper = ({
	children,
	flatTop = false,
	flatBottom = false,
	innerSx = { padding: '20px' },
}: ComponentProps): JSX.Element => {
	const getBorderRadius = (borderRadius: string) => {
		if (flatBottom) {
			return `${borderRadius} ${borderRadius} 0 0`
		}
		if (flatTop) {
			return `0 0 ${borderRadius} ${borderRadius}`
		}
		return `${borderRadius}`
	}

	return (
		<Box
			sx={{
				flex: '1',
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				height: '100%',
				background: 'rgba(255,255,255,0.25)',
				borderRadius: getBorderRadius('18px'),
				backdropFilter: 'blur(20px)',
				padding: '8px',
				boxShadow: 'inset 0px 0 2px rgb(255 255 255 / 90%)',
			}}
		>
			<Box
				sx={{
					minHeight: '10px',
					flex: '1',
					background: 'rgba(255,255,255,0.9)',
					borderRadius: getBorderRadius('14px'),
					border: '1px solid',
					borderColor: 'white',
					backdropFilter: 'blur(20px)',
					boxShadow: '0px 10px 10px rgb(0 0 0 / 10%)',
					...innerSx,
				}}
			>
				{children}
			</Box>
		</Box>
	)
}

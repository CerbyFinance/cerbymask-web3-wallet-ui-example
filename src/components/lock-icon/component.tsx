import React from 'react'
import { Box } from '@chakra-ui/layout'
import { motion } from 'framer-motion'
import { MotionBox } from '@src/components/motion-box/component'

type ComponentProps = {
	forcePurpleIcon?: boolean
}

export const LockIcon = ({
	forcePurpleIcon = false,
}: ComponentProps): JSX.Element => {
	const purpleHex = '#8f81f8'
	const greyHex = '#a3aebf'

	return (
		<>
			<Box
				sx={{
					position: 'relative',
				}}
			>
				<MotionBox
					as="svg"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					sx={{
						width: '24px',
						height: '24px',
						'g:nth-child(1)': {
							...(forcePurpleIcon
								? {
										path: {
											fill: `${purpleHex} !important`,
										},
								  }
								: {}),
						},
						'g:nth-child(2)': {
							...(forcePurpleIcon
								? {
										path: {
											stroke: `${purpleHex} !important`,
										},
								  }
								: {}),
						},
						'g:nth-child(3)': {
							...(forcePurpleIcon
								? {
										path: {
											fill: `${purpleHex} !important`,
										},
								  }
								: {}),
						},
					}}
				>
					<g>
						<motion.path
							variants={{
								closed: { scale: 1, fill: greyHex },
								open: { scale: 1.1, fill: purpleHex },
							}}
							d="M12,12.6c-1.1,0-2,0.9-2,2c0,0.7,0.4,1.4,1,1.7v2.3h2v-2.3c0.6-0.3,1-1,1-1.7C14,13.5,13.1,12.6,12,12.6z"
						/>
					</g>
					<g>
						<motion.path
							fill="transparent"
							strokeWidth="2"
							d="M16,10.6V4.9c0,0-0.2-3.8-4-3.8C8.4,1,8,4.7,8,4.7V10"
							variants={{
								closed: {
									scale: 1,
									stroke: greyHex,
									strokeDashoffset: '0px',
									strokeDasharray: '25px',
								},
								open: {
									scale: 1.0,
									stroke: purpleHex,
									strokeDashoffset: '0px',
									strokeDasharray: '16px',
								},
							}}
						/>
					</g>
					<g>
						<motion.path
							variants={{
								closed: { fill: greyHex },
								open: { fill: purpleHex },
							}}
							d="M12,8c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S16.4,8,12,8z M12,22.1c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6
			S15.3,22.1,12,22.1z"
						/>
					</g>
				</MotionBox>
			</Box>
		</>
	)
}

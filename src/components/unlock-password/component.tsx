import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import {
	Button,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
} from '@chakra-ui/react'
import { MotionBox } from '@src/components/motion-box/component'
import { LockIcon } from '@src/components/lock-icon/component'

const passwordVariants = {
	closed: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 1,
			y: { stiffness: 1000, velocity: 100 },
		},
	},
	open: {
		y: 5,
		opacity: 0,
		transition: {
			delay: 0.5,
			y: { stiffness: 1000, velocity: 100, delay: 0.5 },
		},
	},
}

type ComponentProps = {
	isUnlockLoading: boolean
	onUnlock: () => void
}

export const UnlockPassword = ({
	isUnlockLoading,
	onUnlock,
}: ComponentProps): JSX.Element => {
	const [isInputFocused, setIsInputFocused] = useState(false)
	const [inputValue, setInputValue] = useState('')

	return (
		<MotionBox variants={passwordVariants}>
			<InputGroup>
				<InputLeftElement
					pointerEvents="none"
					color="gray.400"
					fontSize="1.2em"
					sx={{ width: '55px' }}
					children={
						<LockIcon
							forcePurpleIcon={isInputFocused || inputValue.length > 0}
						/>
					}
				/>
				<Input
					placeholder="Enter password"
					type="password"
					size="sm"
					value={inputValue}
					onFocus={() => setIsInputFocused(true)}
					onBlur={() => setIsInputFocused(false)}
					onChange={(e) => {
						setInputValue(e.target.value)
					}}
				/>
				<InputRightElement
					sx={{ width: '100px' }}
					children={
						<Button
							size="sm"
							bg="#9280ff"
							color="gray.50"
							variant="pill"
							mr="2px"
							onClick={onUnlock}
							isLoading={isUnlockLoading}
							_hover={{ bg: '#9280ff' }}
						>
							Unlock
						</Button>
					}
				/>
			</InputGroup>
		</MotionBox>
	)
}

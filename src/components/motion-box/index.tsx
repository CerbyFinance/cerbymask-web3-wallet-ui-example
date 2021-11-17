import * as React from 'react'
import {
	ChakraProvider,
	forwardRef,
	ChakraProps,
	chakra,
	Container,
	ComponentWithAs,
} from '@chakra-ui/react'
import { motion, MotionProps } from 'framer-motion'

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
	MotionProps & {
		as?: React.ElementType
	}

export const MotionBox = motion(
	forwardRef<ChakraProps, 'div'>((props, ref) => {
		return <chakra.div ref={ref} {...props} />
	})
) as ComponentWithAs<'div', MotionBoxProps>

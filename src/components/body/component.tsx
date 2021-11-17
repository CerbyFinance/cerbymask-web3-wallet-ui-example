import React, { useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useCycle } from 'framer-motion'
import { GlassWrapper } from '@src/components/glass-wrapper/component'
import { UnlockPassword } from '@src/components/unlock-password/component'
import { MotionBox } from '@src/components/motion-box/component'
import { FooterNavigation } from '../footer-navigation/component'
import { PriceHeader } from '../price-header/component'
import { CoinsList } from '../coins-list/component'

const bodyAnimation = {
	closed: {
		transform: 'translateY(430px)',
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 20,
		},
	},
	open: () => ({
		transform: 'translateY(20px)',
		transition: {
			delay: 0.55,
			type: 'spring',
			stiffness: 200,
			damping: 20,
		},
	}),
}

const mainScreenAnimation = {
	closed: {
		opacity: 0,
		transition: {
			delay: 1,
			y: { stiffness: 1000, velocity: 100 },
		},
	},
	open: {
		opacity: 1,
		transition: {
			delay: 0.5,
			y: { stiffness: 1000, velocity: 100, delay: 0.5 },
		},
	},
}

export const Body = (): JSX.Element => {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const [isStaggerOpen, toggleStaggerOpen] = useCycle(false, true)
	const [isUnlockLoading, setIsUnlockLoading] = useState(false)
	const containerRef = useRef(null)

	const handleUnlock = () => {
		setIsUnlockLoading(true)
		setTimeout(() => {
			toggleOpen()
			setIsUnlockLoading(false)
		}, 500)

		setTimeout(() => {
			toggleStaggerOpen()
		}, 1100)
	}

	return (
		<>
			<MotionBox
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				ref={containerRef}
			>
				<MotionBox
					variants={bodyAnimation}
					sx={{
						position: 'absolute',
						bottom: '-14px',
						left: 0,
						right: 0,
						paddingX: '16px',
						display: 'flex',
						flexDirection: 'column',
						minHeight: '536px',
					}}
				>
					<GlassWrapper flatBottom>
						<MotionBox
							variants={mainScreenAnimation}
							sx={{
								position: 'absolute',
								top: '20px',
								left: '20px',
								right: '20px',
								height: '100%',
							}}
						>
							<PriceHeader />
							<CoinsList isStaggerOpen={isStaggerOpen} />
							<FooterNavigation />
						</MotionBox>
						<UnlockPassword
							isUnlockLoading={isUnlockLoading}
							onUnlock={handleUnlock}
						/>
					</GlassWrapper>
				</MotionBox>
			</MotionBox>
		</>
	)
}

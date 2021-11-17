import React, { FunctionComponent, useEffect } from 'react'
import { Provider } from './provider'
import { browser } from 'webextension-polyfill-ts'

export const Popup: FunctionComponent = () => {
	useEffect(() => {
		browser.runtime.sendMessage({ popupMounted: true })
	}, [])

	return (
		<>
			<Provider />
		</>
	)
}


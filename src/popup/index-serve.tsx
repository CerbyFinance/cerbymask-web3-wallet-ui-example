// @ts-nocheck
import React from 'react'
import { render } from 'react-dom'
import { Provider } from './provider'

let container = document.createElement('div')
container.id = 'serve-test'
container.style =
	'position: absolute; top: 40px; left: 50%; margin-left: -200px; overflow: hidden;'

document.addEventListener('DOMContentLoaded', function (event) {
	document.body.prepend(container)
	render(<Provider />, container)
})

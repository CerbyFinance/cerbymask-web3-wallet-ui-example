// @ts-nocheck

import { Box, Center, Heading } from '@chakra-ui/layout'
import { useColorMode, Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Shaders, Node, GLSL } from 'gl-react'
import { Surface } from 'gl-react-dom'

type ComponentProps = {
	flatTop?: boolean
	flatBottom?: boolean
	innerSx?: object
}

// in gl-react you need to statically define "shaders":
const shaders = Shaders.create({
	helloBlue: {
		// uniforms are variables from JS. We pipe blue uniform into blue output color
		frag: GLSL`
precision highp float;
varying vec2 uv;
uniform float blue;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
}
`,
	},
	helloGL: {
		// This is our first fragment shader in GLSL language (OpenGL Shading Language)
		// (GLSL code gets compiled and run on the GPU)
		frag: GLSL`
precision highp float;
varying vec2 uv;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, 1.5, 1.0);
}
`,
		// the main() function is called FOR EACH PIXELS
		// the varying uv is a vec2 where x and y respectively varying from 0.0 to 1.0.
		// we set in output the pixel color using the vec4(r,g,b,a) format.
		// see GLSL_ES_Specification_1.0.17
	},
})

const Refresh = () => {
	const [time, setTime] = useState(0)
	const blue = 0.5 + 0.5 * Math.cos(time / 500)
	useEffect(() => {
		let startT
		let h
		function loop(t) {
			h = requestAnimationFrame(loop)
			if (!startT) startT = t
			setTime((t - startT) / 1000)
		}
		h = requestAnimationFrame(loop)
		return () => cancelAnimationFrame(h)
	}, [])
	//return <Node shader={shaders.helloBlue} uniforms={{ blue }} />
	return <Node shader={shaders.helloGL} />
}

export const ParticleBg = ({
	flatTop = false,
	flatBottom = false,
	innerSx = { padding: '20px' },
}: ComponentProps): JSX.Element => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: '0',
				bottom: '0',
				left: '0',
				right: '0',
			}}
		>
			<Surface width={400} height={600}>
				<Refresh />
			</Surface>
		</Box>
	)
}

'use client'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { SkateboardModel } from './SkateboardModel'

const InteractiveSkateboard = () => {
	return (
		<div className='absolute inset-0 flex place-items-center'>
			<Canvas
				className='min-h-[60rem] w-full'
				camera={{ position: [1.5, 1, 1.4], fov: 55 }}
			>
				<Suspense>
					<Scene />
				</Suspense>
			</Canvas>
		</div>
	)
}

export default InteractiveSkateboard

const Scene = () => {
	return (
		<group>
			<OrbitControls />
			<Environment files='/hdr/warehouse-256.hdr' />
			<SkateboardModel
				wheelTextureUrl='/wheel-yellow.png'
				deckTextureUrl='/yellow-and-black.png'
			/>
			<ContactShadows opacity={0.6} position={[0, -0.08, 0]} />
		</group>
	)
}

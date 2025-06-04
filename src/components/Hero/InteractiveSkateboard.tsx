'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import SkateboardScene from './SkateboardScene'

export const INITIAL_CAMERA_POSITION = [1.5, 1, 1.4] as const

const InteractiveSkateboard = () => {
	return (
		<div className='absolute inset-0 flex place-items-center'>
			<Canvas
				className='min-h-[60rem] w-full'
				camera={{ position: INITIAL_CAMERA_POSITION, fov: 55 }}
			>
				<Suspense>
					<SkateboardScene />
				</Suspense>
			</Canvas>
		</div>
	)
}

export default InteractiveSkateboard

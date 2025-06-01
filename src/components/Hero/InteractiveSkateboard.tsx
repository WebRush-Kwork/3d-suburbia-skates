'use client'
import { Group } from 'three'
import { ContactShadows, Environment } from '@react-three/drei'
import { Canvas, ThreeEvent } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { SkateboardModel } from './SkateboardModel'
import gsap from 'gsap'

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
	const groupRef = useRef<Group>(null)

	const onClick = (event: ThreeEvent<MouseEvent>) => {
		event.stopPropagation()

		const board = groupRef.current
		if (!board) return

		gsap
			.timeline()
			.to(board.position, {
				y: 0.8,
				duration: 0.5,
				delay: 0.25,
				ease: 'power2.out'
			})
			.to(board.position, {
				y: 0,
				duration: 0.4,
				ease: 'power2.in'
			})

		gsap
			.timeline()
			.to(board.rotation, {
				x: -0.6,
				duration: 0.26,
				ease: 'none'
			})
			.to(board.rotation, { x: 0.4, duration: 0.82, ease: 'power2.in' })
			.to(board.rotation, { x: 0, duration: 0.12, ease: 'none' })
	}

	return (
		<group>
			<Environment files='/hdr/warehouse-256.hdr' />
			<group ref={groupRef}>
				<SkateboardModel
					wheelTextureUrl='/wheel-yellow.png'
					deckTextureUrl='/yellow-and-black.png'
				/>
				<mesh position={[0, 0.27, 0]} name='middle' onClick={onClick}>
					<boxGeometry args={[0.6, 0.1, 2.2]} />
					<meshStandardMaterial visible={false} />
				</mesh>
			</group>
			<ContactShadows opacity={0.6} position={[0, -0.08, 0]} />
		</group>
	)
}

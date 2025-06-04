'use client'

import {
	CameraControls,
	Environment,
	Preload,
	useTexture
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { useCustomizerControls } from './context'
import { SkateboardModel } from '@/components/Hero/SkateboardModel'
import { MeshStandardMaterial, RepeatWrapping } from 'three'

interface IPreview {
	wheelTextureUrls: string[]
	deckTextureUrls: string[]
}

const Preview = ({ wheelTextureUrls, deckTextureUrls }: IPreview) => {
	const cameraControlsRef = useRef<CameraControls>(null)
	// @ts-ignore
	const { selectedWheel, selectedBolt, selectedDeck, selectedTruck } =
		useCustomizerControls()

	// const wheelTextureUrl = wheelTextureUrls[0]
	// const deckTextureUrl = deckTextureUrls[0]
	const wheelTextureUrl = '/skateboard/SkateWheel1.png'
	const deckTextureUrl = '/skateboard/Deck.webp'
	const truckColor = '#6f6e6a'
	const boltColor = '#6f6e6a'

	return (
		<Canvas shadows>
			<Suspense fallback={null}>
				<Environment
					files='/hdr/warehouse-512.hdr'
					environmentIntensity={0.6}
				/>
				<directionalLight
					castShadow
					lookAt={[0, 0, 0]}
					position={[1, 1, 1]}
					intensity={1.6}
				/>
				<StageFloor />
				<SkateboardModel
					wheelTextureUrl={wheelTextureUrl}
					deckTextureUrl={deckTextureUrl}
					pose='side'
				/>
				<CameraControls
					ref={cameraControlsRef}
					minDistance={0.2}
					maxDistance={4}
				/>
			</Suspense>
			<Preload all />
		</Canvas>
	)
}

export default Preview

function StageFloor() {
	const normalMap = useTexture('/concrete-normal.avif')
	normalMap.wrapS = RepeatWrapping
	normalMap.wrapT = RepeatWrapping
	normalMap.repeat.set(30, 30)
	normalMap.anisotropy = 8

	const environmentColor = '#3b3a3a'

	const material = new MeshStandardMaterial({
		roughness: 0.75,
		color: environmentColor,
		normalMap
	})

	return (
		<mesh
			material={material}
			castShadow
			receiveShadow
			position={[0, -0.005, 0]}
			rotation={[-Math.PI / 2, 0, 0]}
		>
			<circleGeometry args={[20, 32]} />
		</mesh>
	)
}

'use client'

import {
	CameraControls,
	Environment,
	Preload,
	useTexture
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { SkateboardModel } from '@/components/Hero/SkateboardModel'
import { Mesh, MeshStandardMaterial, RepeatWrapping } from 'three'
import { useCustomizerControls } from './context'

const ENVIRONMENT_COLOR = '#3b3a3a'

const Preview = () => {
	const cameraControlsRef = useRef<CameraControls>(null)
	const floorRef = useRef<Mesh>(null)

	const { selectedDeck, selectedWheel, selectedBolts, selectedTrucks } =
		useCustomizerControls()

	const onCameraControlStart = () => {
		if (
			!cameraControlsRef.current ||
			!floorRef.current ||
			cameraControlsRef.current.colliderMeshes.length > 0
		)
			return

		cameraControlsRef.current.colliderMeshes = [floorRef.current]
	}

	return (
		<Canvas camera={{ position: [2.5, 1, 0], fov: 50 }} shadows>
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
				<fog attach='fog' args={[ENVIRONMENT_COLOR, 3, 10]} />
				<color attach='background' args={[ENVIRONMENT_COLOR]} />
				<StageFloor />
				<mesh rotation={[-Math.PI / 2, 0, 0]} ref={floorRef}>
					<planeGeometry args={[6, 6]} />
					<meshBasicMaterial visible={false} />
				</mesh>
				<SkateboardModel
					wheelTextureProp={selectedWheel}
					deckTextureProp={selectedDeck}
					boltsColorProp={selectedBolts}
					trucksColorProp={selectedTrucks}
					pose='side'
				/>
				<CameraControls
					ref={cameraControlsRef}
					minDistance={0.2}
					maxDistance={4}
					onStart={onCameraControlStart}
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

	const material = new MeshStandardMaterial({
		roughness: 0.75,
		color: ENVIRONMENT_COLOR,
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

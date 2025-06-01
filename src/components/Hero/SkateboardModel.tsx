import * as THREE from 'three'
import { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

type GLTFResult = GLTF & {
	nodes: {
		GripTape: THREE.Mesh
		Wheel1: THREE.Mesh
		Wheel2: THREE.Mesh
		Deck: THREE.Mesh
		Wheel4: THREE.Mesh
		Bolts: THREE.Mesh
		Wheel3: THREE.Mesh
		Baseplates: THREE.Mesh
		Truck1: THREE.Mesh
		Truck2: THREE.Mesh
	}
}

interface ISkateboardModel {
	wheelTextureUrl: string
	deckTextureUrl: string
	isConstantRotation?: boolean
}

export function SkateboardModel({
	wheelTextureUrl,
	deckTextureUrl,
	isConstantRotation = false
}: ISkateboardModel) {
	const wheelRefs = useRef<THREE.Object3D[]>([])
	const { nodes } = useGLTF('/skateboard.gltf') as unknown as GLTFResult

	const gripTapeDiffuse = useTexture('/skateboard/griptape-diffuse.webp')
	const gripTapeRoughness = useTexture('/skateboard/griptape-roughness.webp')

	const gripTapeMaterial = useMemo(() => {
		const material = new THREE.MeshStandardMaterial({
			map: gripTapeDiffuse,
			bumpMap: gripTapeRoughness,
			roughnessMap: gripTapeRoughness,
			bumpScale: 3.5,
			roughness: 0.8,
			color: '#555'
		})

		if (gripTapeDiffuse) {
			gripTapeDiffuse.wrapS = THREE.RepeatWrapping
			gripTapeDiffuse.wrapT = THREE.RepeatWrapping
			gripTapeDiffuse.repeat.set(9, 9)
			gripTapeDiffuse.needsUpdate = true

			gripTapeRoughness.wrapS = THREE.RepeatWrapping
			gripTapeRoughness.wrapT = THREE.RepeatWrapping
			gripTapeRoughness.repeat.set(9, 9)
			gripTapeRoughness.needsUpdate = true

			gripTapeRoughness.anisotropy = 8
		}

		return material
	}, [gripTapeDiffuse, gripTapeRoughness])

	const boltColor = '#34495E'

	const boltMaterial = useMemo(
		() =>
			new THREE.MeshStandardMaterial({
				color: boltColor,
				metalness: 0.5,
				roughness: 0.3
			}),
		[boltColor]
	)

	const truckColor = '#34495E'
	const metalNormal = useTexture('/skateboard/metal-normal.avif')
	metalNormal.wrapS = THREE.RepeatWrapping
	metalNormal.wrapT = THREE.RepeatWrapping
	metalNormal.anisotropy = 8
	metalNormal.repeat.set(8, 8)

	const truckMaterial = useMemo(
		() =>
			new THREE.MeshStandardMaterial({
				color: truckColor,
				normalMap: metalNormal,
				normalScale: new THREE.Vector2(0.3, 0.3),
				metalness: 0.8,
				roughness: 0.25
			}),
		[truckColor, metalNormal]
	)

	const deckTexture = useTexture(deckTextureUrl)
	deckTexture.flipY = false
	deckTexture.colorSpace = THREE.SRGBColorSpace

	const deckMaterial = useMemo(
		() =>
			new THREE.MeshStandardMaterial({
				map: deckTexture,
				roughness: 0.1
			}),
		[deckTexture]
	)

	const wheelTexture = useTexture(wheelTextureUrl)
	wheelTexture.flipY = false
	wheelTexture.colorSpace = THREE.SRGBColorSpace

	const wheelMaterial = useMemo(
		() =>
			new THREE.MeshStandardMaterial({
				map: wheelTexture,
				roughness: 0.35
			}),
		[wheelTexture]
	)

	const addToWheelRefs = (ref: THREE.Object3D) =>
		ref && !wheelRefs.current.includes(ref) && wheelRefs.current.push(ref)

	useFrame(() => {
		const currentWheelRef = wheelRefs.current
		if (!currentWheelRef || isConstantRotation) return

		for (const wheel of currentWheelRef) {
			wheel.rotation.x += 0.2
		}
	})

	useEffect(() => {
		const currentWheelRef = wheelRefs.current
		if (!currentWheelRef || !isConstantRotation) return

		for (const wheel of currentWheelRef) {
			gsap.to(wheel.rotation, {
				x: '-=30',
				duration: 2.5,
				ease: 'circ.out'
			})
		}
	}, [isConstantRotation, wheelTextureUrl])

	return (
		<group dispose={null}>
			<group name='Scene'>
				<mesh
					name='GripTape'
					castShadow
					receiveShadow
					geometry={nodes.GripTape.geometry}
					material={gripTapeMaterial}
					position={[0, 0.286, -0.002]}
				/>
				<mesh
					name='Wheel1'
					castShadow
					receiveShadow
					geometry={nodes.Wheel1.geometry}
					material={wheelMaterial}
					position={[0.238, 0.086, 0.635]}
					ref={addToWheelRefs}
				/>
				<mesh
					name='Wheel2'
					castShadow
					receiveShadow
					geometry={nodes.Wheel2.geometry}
					material={wheelMaterial}
					position={[-0.237, 0.086, 0.635]}
					ref={addToWheelRefs}
				/>
				<mesh
					name='Deck'
					castShadow
					receiveShadow
					geometry={nodes.Deck.geometry}
					material={deckMaterial}
					position={[0, 0.271, -0.002]}
				/>
				<mesh
					name='Wheel4'
					castShadow
					receiveShadow
					geometry={nodes.Wheel4.geometry}
					material={wheelMaterial}
					position={[-0.238, 0.086, -0.635]}
					rotation={[Math.PI, 0, Math.PI]}
					ref={addToWheelRefs}
				/>
				<mesh
					name='Bolts'
					castShadow
					receiveShadow
					geometry={nodes.Bolts.geometry}
					material={boltMaterial}
					position={[0, 0.198, 0]}
					rotation={[Math.PI, 0, Math.PI]}
				/>
				<mesh
					name='Wheel3'
					castShadow
					receiveShadow
					geometry={nodes.Wheel3.geometry}
					material={wheelMaterial}
					position={[0.237, 0.086, -0.635]}
					rotation={[Math.PI, 0, Math.PI]}
					ref={addToWheelRefs}
				/>
				<mesh
					name='Baseplates'
					castShadow
					receiveShadow
					geometry={nodes.Baseplates.geometry}
					material={truckMaterial}
					position={[0, 0.211, 0]}
				/>
				<mesh
					name='Truck1'
					castShadow
					receiveShadow
					geometry={nodes.Truck1.geometry}
					material={truckMaterial}
					position={[0, 0.101, -0.617]}
				/>
				<mesh
					name='Truck2'
					castShadow
					receiveShadow
					geometry={nodes.Truck2.geometry}
					material={truckMaterial}
					position={[0, 0.101, 0.617]}
					rotation={[Math.PI, 0, Math.PI]}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('/skateboard.gltf')

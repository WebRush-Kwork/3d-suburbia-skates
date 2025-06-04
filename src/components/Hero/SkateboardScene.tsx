import { Environment, ContactShadows, Html } from '@react-three/drei'
import { ThreeEvent, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Group, Vector3 } from 'three'
import { SkateboardModel } from './SkateboardModel'
import { INITIAL_CAMERA_POSITION } from './InteractiveSkateboard'
import gsap from 'gsap'
import Hotspot from './Hotspot'
import { WavyPaths } from './WavyPaths'

type TIsHotspotShown = {
	front: boolean
	middle: boolean
	back: boolean
}

const SkateboardScene = () => {
	const groupRef = useRef<Group>(null)
	const originRef = useRef<Group>(null)

	const [isAnimating, setIsAnimating] = useState<boolean>(false)
	const [isHotspotShown, setIsHotSpotShown] = useState<TIsHotspotShown>({
		front: true,
		middle: true,
		back: true
	})

	const jumpBoardAnimation = (board: Group) => {
		setIsAnimating(true)

		gsap
			.timeline({ onComplete: () => setIsAnimating(false) })
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
	}

	const ollie = (board: Group) => {
		jumpBoardAnimation(board)

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

	const kickflip = (board: Group) => {
		jumpBoardAnimation(board)

		gsap
			.timeline()
			.to(board.rotation, {
				x: -0.6,
				duration: 0.26,
				ease: 'none'
			})
			.to(board.rotation, { x: 0.4, duration: 0.82, ease: 'power2.in' })
			.to(
				board.rotation,
				{
					z: `+=${Math.PI * 2}`,
					duration: 0.78,
					ease: 'none'
				},
				0.3
			)
			.to(board.rotation, { x: 0, duration: 0.12, ease: 'none' })
	}

	const frontSide360 = (origin: Group, board: Group) => {
		jumpBoardAnimation(board)

		gsap
			.timeline()
			.to(board.rotation, {
				x: -0.6,
				duration: 0.26,
				ease: 'none'
			})
			.to(board.rotation, { x: 0.4, duration: 0.82, ease: 'power2.in' })
			.to(
				origin.rotation,
				{ y: `+=${Math.PI * 2}`, duration: 0.77, ease: 'none' },
				0.3
			)
			.to(board.rotation, { x: 0, duration: 0.14, ease: 'none' })
	}

	const onClick = (event: ThreeEvent<MouseEvent>) => {
		event.stopPropagation()

		const board = groupRef.current
		const origin = originRef.current
		if (!board || !origin || isAnimating) return

		const { name } = event.object

		setIsHotSpotShown(current => ({ ...current, [name]: false }))

		switch (name) {
			case 'front':
				frontSide360(origin, board)
				break
			case 'middle':
				kickflip(board)
				break
			case 'back':
				ollie(board)
				break
		}
	}

	const { camera } = useThree()

	useEffect(() => {
		camera.lookAt(new Vector3(-0.2, 0.15, 0))

		const setZoom = () => {
			const scale = Math.max(Math.min(1000 / window.innerWidth, 2.2), 1)

			camera.position.x = INITIAL_CAMERA_POSITION[0] * scale
			camera.position.y = INITIAL_CAMERA_POSITION[1] * scale
			camera.position.z = INITIAL_CAMERA_POSITION[2] * scale
		}

		setZoom()

		window.addEventListener('resize', setZoom)

		return () => window.removeEventListener('resize', setZoom)
	}, [camera])

	return (
		<group>
			<Environment files='/hdr/warehouse-256.hdr' />
			<group ref={originRef}>
				<group ref={groupRef} position={[-0.25, 0, -0.635]}>
					<group position={[0, -0.086, 0.635]}>
						<SkateboardModel
							wheelTextureUrl='/wheel-yellow.png'
							deckTextureUrl='/yellow-and-black.png'
						/>
						<Hotspot
							isVisible={!isAnimating && isHotspotShown.front}
							position={[0, 0.38, 1]}
							color='#b8fc39'
						/>
						<mesh position={[0, 0.27, 0.9]} name='front' onClick={onClick}>
							<boxGeometry args={[0.6, 0.2, 0.58]} />
							<meshStandardMaterial visible={false} />
						</mesh>
						<Hotspot
							isVisible={!isAnimating && isHotspotShown.middle}
							position={[0, 0.33, 0]}
							color='#ff7a51'
						/>
						<mesh position={[0, 0.27, 0]} name='middle' onClick={onClick}>
							<boxGeometry args={[0.6, 0.1, 1.2]} />
							<meshStandardMaterial visible={false} />
						</mesh>
						<Hotspot
							isVisible={!isAnimating && isHotspotShown.back}
							position={[0, 0.35, -0.9]}
							color='#46acfa'
						/>
						<mesh position={[0, 0.27, -0.9]} name='back' onClick={onClick}>
							<boxGeometry args={[0.6, 0.2, 0.58]} />
							<meshStandardMaterial visible={false} />
						</mesh>
					</group>
				</group>
			</group>
			<ContactShadows opacity={0.6} position={[0, -0.08, 0]} />
			<group
				rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
				position={[0, -0.09, -0.5]}
				scale={[0.2, 0.2, 0.2]}
			>
				<Html transform zIndexRange={[10, 0]} occlude='blending'>
					<WavyPaths />
				</Html>
			</group>
		</group>
	)
}

export default SkateboardScene

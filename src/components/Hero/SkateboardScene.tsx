import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'
import { SkateboardModel } from './SkateboardModel'
import gsap from 'gsap'

const SkateboardScene = () => {
	const groupRef = useRef<Group>(null)
	const originRef = useRef<Group>(null)

	const jumpBoardAnimation = (board: Group) => {
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
		if (!board || !origin) return

		const { name } = event.object

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

	return (
		<group>
			<OrbitControls />
			<Environment files='/hdr/warehouse-256.hdr' />
			<group ref={originRef}>
				<group ref={groupRef} position={[-0.25, 0, -0.635]}>
					<group position={[0, -0.086, 0.635]}>
						<SkateboardModel
							wheelTextureUrl='/wheel-yellow.png'
							deckTextureUrl='/yellow-and-black.png'
						/>
						<mesh position={[0, 0.27, 0.9]} name='front' onClick={onClick}>
							<boxGeometry args={[0.6, 0.2, 0.58]} />
							<meshStandardMaterial visible={false} />
						</mesh>
						<mesh position={[0, 0.27, 0]} name='middle' onClick={onClick}>
							<boxGeometry args={[0.6, 0.1, 1.2]} />
							<meshStandardMaterial visible={false} />
						</mesh>
						<mesh position={[0, 0.27, -0.9]} name='back' onClick={onClick}>
							<boxGeometry args={[0.6, 0.2, 0.58]} />
							<meshStandardMaterial visible={false} />
						</mesh>
					</group>
				</group>
			</group>
			<ContactShadows opacity={0.6} position={[0, -0.08, 0]} />
		</group>
	)
}

export default SkateboardScene

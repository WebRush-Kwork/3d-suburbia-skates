import { Billboard } from '@react-three/drei'
import { useRef } from 'react'
import { Mesh } from 'three'

interface IHotspot {
	position: [number, number, number]
	isVisible: boolean
	color?: string
}

const Hotspot = ({ position, isVisible, color = '#e6fc6a' }: IHotspot) => {
	const hotspotRef = useRef<Mesh>(null)

	return (
		<Billboard position={position} follow>
			<mesh ref={hotspotRef} visible={isVisible}>
				<circleGeometry args={[0.02, 32]} />
				<meshStandardMaterial color={color} transparent />
			</mesh>
			<mesh
				visible={isVisible}
				onPointerOver={() => (document.body.style.cursor = 'pointer')}
				onPointerOut={() => (document.body.style.cursor = 'default')}
			>
				<circleGeometry args={[0.03, 32]} />
				<meshBasicMaterial color={color} />
			</mesh>
		</Billboard>
	)
}

export default Hotspot

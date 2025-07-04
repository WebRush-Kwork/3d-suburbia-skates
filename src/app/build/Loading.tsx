'use client'

import { Logo } from '@/components/Logo'
import { useProgress } from '@react-three/drei'
import clsx from 'clsx'

const Loading = () => {
	const { progress } = useProgress()

	return (
		<div
			className={clsx(
				'absolute inset-0 grid place-content-center bg-brand-navy font-sans text-[15vw] text-white transition-opacity duration-1000 z-20',
				progress >= 100 && 'opacity-0 pointer-events-none'
			)}
		>
			<Logo className='w-[15vw]' />
			<p className='w-full animate-squiggle content-center text-center leading-none text-brand-lime'>
				LOADING...
			</p>
		</div>
	)
}

export default Loading

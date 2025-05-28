'use client'
import { Bounded } from '@/components/Bounded'
import { ButtonLink } from '@/components/ButtonLink'
import { Heading } from '@/components/Heading'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const Parallax = () => {
	const foregroundRef = useRef<HTMLDivElement>(null)
	const backgroundRef = useRef<HTMLDivElement>(null)

	const targetPosition = useRef({ x: 0, y: 0 })
	const currentPosition = useRef({ x: 0, y: 0 })

	useEffect(() => {
		const onMouseMove = (event: MouseEvent) => {
			const { innerWidth, innerHeight } = window

			const xPercent = (event.clientX / innerWidth - 0.5) * 2
			const yPercent = (event.clientY / innerHeight - 0.5) * 2

			targetPosition.current = {
				x: xPercent * -20,
				y: yPercent * -20
			}
		}

		window.addEventListener('mousemove', onMouseMove)

		const animationFrame = () => {
			const { x: targetX, y: targetY } = targetPosition.current
			const { x: currentX, y: currentY } = currentPosition.current

			const newX = currentX + (targetX - currentX) * 0.1
			const newY = currentY + (targetY - currentY) * 0.1

			currentPosition.current = { x: newX, y: newY }

			if (backgroundRef.current)
				backgroundRef.current.style.transform = `translate(${newX}px, ${newY}px)`

			if (foregroundRef.current)
				foregroundRef.current.style.transform = `translate(${newX * 2.5}px, ${
					newY * 2.5
				}px)`

			requestAnimationFrame(animationFrame)
		}

		const frame = requestAnimationFrame(animationFrame)

		return () => {
			window.removeEventListener('mousemove', onMouseMove)
			cancelAnimationFrame(frame)
		}
	}, [])

	return (
		<Bounded className='bg-[var(--brand-blue)] bg-texture text-white'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center'>
				<div className='flex flex-col items-center md:items-start md:text-start gap-8'>
					<Heading size='lg' as='h2'>
						Crafted for the kickflip
					</Heading>
					<div className='max-w-md leading-relaxed text-lg'>
						Build for big tricks and hard landings, our boards are designed to
						handle every flip, grind, and bail. Perfect balance, every time.
					</div>
					<div>
						<ButtonLink color='lime'>Shop Boards</ButtonLink>
					</div>
				</div>
				<div className='grid grid-cols-1 grid-rows-1 place-items-center'>
					<div
						className='col-start-1 row-start-1 transition-transform'
						ref={backgroundRef}
					>
						<Image
							src='/paint-background.png'
							alt=''
							width={400}
							height={500}
						/>
					</div>
					<div
						className='col-start-1 row-start-1 transition-transform'
						ref={foregroundRef}
					>
						<Image src='/guy-1.png' alt='' width={330} height={500} />
					</div>
				</div>
			</div>
		</Bounded>
	)
}

export default Parallax

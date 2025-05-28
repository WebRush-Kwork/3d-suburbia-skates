'use client'
import { useEffect, useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { Bounded } from '@/components/Bounded'
import { ButtonLink } from '@/components/ButtonLink'
import { Heading } from '@/components/Heading'
import { parallaxData } from '@/data/parallax'

const Parallax = () => {
	const foregroundRef = useRef<HTMLDivElement[]>([])
	const backgroundRef = useRef<HTMLDivElement[]>([])

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
				backgroundRef.current.forEach(
					ref => (ref.style.transform = `translate(${newX}px, ${newY}px)`)
				)

			if (foregroundRef.current)
				foregroundRef.current.forEach(
					ref =>
						(ref.style.transform = `translate(${newX * 2.5}px, ${
							newY * 2.5
						}px)`)
				)

			requestAnimationFrame(animationFrame)
		}

		const frame = requestAnimationFrame(animationFrame)

		return () => {
			window.removeEventListener('mousemove', onMouseMove)
			cancelAnimationFrame(frame)
		}
	}, [])

	return (
		<>
			{parallaxData.map((slide, index) => (
				<Bounded
					key={index}
					className={clsx(
						'bg-texture',
						slide.background === 'blue' && 'bg-brand-blue text-white',
						slide.background === 'orange' && 'bg-brand-orange text-white',
						slide.background === 'navy' && 'bg-brand-navy text-white',
						slide.background === 'lime' && 'bg-brand-lime text-[#27272a]'
					)}
				>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center'>
						<div
							className={clsx(
								'flex flex-col items-center md:items-start md:text-start gap-8',
								slide.order === 2 && 'order-2'
							)}
						>
							<Heading size='lg' as='h2'>
								{slide.title}
							</Heading>
							<div className='max-w-md leading-relaxed text-lg'>
								{slide.description}
							</div>
							<div>
								<ButtonLink
									color={slide.background === 'lime' ? 'orange' : 'lime'}
								>
									Shop Boards
								</ButtonLink>
							</div>
						</div>
						<div className='grid grid-cols-1 grid-rows-1 place-items-center'>
							<div
								className='col-start-1 row-start-1 transition-transform'
								ref={el => (backgroundRef.current[index] = el)}
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
								ref={el => (foregroundRef.current[index] = el)}
							>
								<Image
									src={`/guy-${index + 1}.png`}
									alt=''
									width={330}
									height={500}
								/>
							</div>
						</div>
					</div>
				</Bounded>
			))}
		</>
	)
}

export default Parallax

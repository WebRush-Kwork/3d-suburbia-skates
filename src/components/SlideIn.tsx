'use client'
import { useEffect, useRef } from 'react'

interface ISlideIn {
	children: React.ReactNode
	delay?: number
	duration?: number
}

const SlideIn = ({ children, delay = 0, duration = 0.6 }: ISlideIn) => {
	const elementRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const element = elementRef.current
		if (!element) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					element.style.animation = `slide-in-animation ${duration}s ease ${delay}s forwards`
					observer.unobserve(element)
				}
			},
			{ rootMargin: '-150px' }
		)

		observer.observe(element)

		return () => observer.disconnect()
	}, [delay, duration])

	return (
		<div ref={elementRef} className='slide-in'>
			{children}
		</div>
	)
}

export default SlideIn

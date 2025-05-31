'use client'
import { useEffect, useRef, useState } from 'react'

type TLazyYouTubePlayer = {
	youtubeId: string
}

export function LazyYouTubePlayer ({ youtubeId }: TLazyYouTubePlayer) {
	const containerRef = useRef<HTMLDivElement>(null)
	const [isInView, setIsInView] = useState<boolean>(false)

	useEffect(() => {
		const currentContainerRef = containerRef.current

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setIsInView(true)
			},
			{ rootMargin: '1500px' }
		)

		if (currentContainerRef) observer.observe(currentContainerRef)

		return () => {
			if (currentContainerRef) observer.unobserve(currentContainerRef)
		}
	}, [])

	return (
		<div className='relative h-full w-full' ref={containerRef}>
			{isInView && (
				<iframe
					src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}`}
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					className='pointer-events-none h-full w-full border-0'
				/>
			)}
		</div>
	)
}

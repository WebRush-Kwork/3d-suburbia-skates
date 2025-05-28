type TLazyYouTubePlayer = {
	youtubeId: string
}

export function LazyYouTubePlayer({ youtubeId }: TLazyYouTubePlayer) {
	return (
		<div className='relative h-full w-full'>
			<iframe
				src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}`}
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				className='pointer-events-none h-full w-full border-0'
			/>
		</div>
	)
}

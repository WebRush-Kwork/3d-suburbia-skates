import { Bounded } from '@/components/Bounded'
import { LazyYouTubePlayer } from '@/components/Video/LazyYoutubePlayer'
import Image from 'next/image'

const Video = () => {
	return (
		<Bounded className='bg-zinc-900 bg-texture'>
			<h2 className='sr-only'>Video Reel</h2>
			<div className='relative aspect-video'>
				<div className='video-mask absolute inset-0 bg-brand-lime' />
				<div className='video-mask relative h-full'>
					<LazyYouTubePlayer youtubeId='44I29krtxaw' />
					<Image
						src='/image-texture.png'
						alt=''
						fill
						className='opacity-50 object-cover pointer-events-none'
					/>
				</div>
			</div>
		</Bounded>
	)
}

export default Video

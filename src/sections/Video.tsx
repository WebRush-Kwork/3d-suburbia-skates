import { Bounded } from '@/components/Bounded'
import { LazyYouTubePlayer } from '@/components/Video/LazyYoutubePlayer'

const Video = () => {
	return (
		<Bounded className='bg-zinc-900 bg-texture'>
			<h2 className='sr-only'>Video Reel</h2>
			<div className='relative aspect-video'>
				<LazyYouTubePlayer youtubeId='44I29krtxaw' />
			</div>
		</Bounded>
	)
}

export default Video

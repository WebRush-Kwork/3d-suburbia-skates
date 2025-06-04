import { Logo } from '@/components/Logo'
import { CustomizerControlsProvider } from './context'
import { wheelTextureUrls } from '@/data/textures'
import { deckTextureUrls } from '@/data/decks'
import Sidebar from '@/components/Build/Sidebar'
import Link from 'next/link'
import Preview from './Preview'

const BuildPage = () => {
	return (
		<div className='min-h-screen flex flex-col lg:flex-row bg-[#3a414a]'>
			<CustomizerControlsProvider>
				<div className='lg:grow aspect-square lg:aspect-auto'>
					<div className='absolute inset-0'>
						<Preview
							wheelTextureUrls={wheelTextureUrls}
							deckTextureUrls={deckTextureUrls}
						/>
					</div>
					<Link href='/' className='absolute top-6 left-6'>
						<Logo className='h-12 text-white' />
					</Link>
				</div>
				<Sidebar />
			</CustomizerControlsProvider>
		</div>
	)
}

export default BuildPage

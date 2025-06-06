import { Logo } from '@/components/Logo'
import { CustomizerControlsProvider } from './context'
import Sidebar from '@/components/Build/Sidebar'
import Preview from './Preview'
import Link from 'next/link'
import { wheelTextureUrls } from '@/data/wheels'
import { deckTextureUrls } from '@/data/decks'
import { colors } from '@/data/colors'
import Loading from './Loading'

interface ISearchParams {
	wheel?: string
	deck?: string
	bolts?: string
	trucks?: string
}

const BuildPage = async (params: { searchParams: Promise<ISearchParams> }) => {
	const searchParams = await params.searchParams

	const defaultWheel =
		wheelTextureUrls.find(wheel => wheel.name === searchParams.wheel)?.url ??
		wheelTextureUrls[0].url
	const defaultDeck =
		deckTextureUrls.find(deck => deck.name === searchParams.deck)?.url ??
		deckTextureUrls[0].url
	const defaultBolts =
		colors.find(color => color.name === searchParams.bolts)?.hex ??
		colors[0].hex
	const defaultTrucks =
		colors.find(color => color.name === searchParams.trucks)?.hex ??
		colors[0].hex

	return (
		<div className='min-h-screen flex flex-col lg:flex-row bg-[#3a414a]'>
			<CustomizerControlsProvider>
				<div className='lg:grow aspect-square lg:aspect-auto'>
					<div className='absolute inset-0'>
						<Preview
							{...{ defaultWheel, defaultDeck, defaultBolts, defaultTrucks }}
						/>
					</div>
					<Link href='/' className='absolute top-6 left-6'>
						<Logo className='h-12 text-white' />
					</Link>
				</div>
				<Sidebar />
			</CustomizerControlsProvider>
			<Loading />
		</div>
	)
}

export default BuildPage

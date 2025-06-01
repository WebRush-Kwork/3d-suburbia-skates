import { Bounded } from '@/components/Bounded'
import { ButtonLink } from '@/components/ButtonLink'
import { Heading } from '@/components/Heading'
import { TallLogo } from '@/components/Hero/TallLogo'
import { WideLogo } from '@/components/Hero/WideLogo'
import InteractiveSkateboard from '@/components/Hero/InteractiveSkateboard'

const Hero = () => {
	return (
		<Bounded className='bg-[var(--brand-pink)] relative h-dvh overflow-hidden bg-texture'>
			<div className='absolute inset-0 flex items-center pt-20'>
				<WideLogo className='w-full text-[var(--brand-purple)] hidden opacity-20 mix-blend-multiply lg:block' />
				<TallLogo className='w-full text-[var(--brand-purple)] opacity-20 mix-blend-multiply lg:hidden' />
			</div>
			<div className='grid absolute inset-0 mx-auto mt-24 max-w-6xl grid-rows-1 px-6 py-10 lg:py-12 xl:py-16'>
				<Heading className='max-w-2xl relative' size='xl'>
					Escape the cul-de-sac
				</Heading>
				<div className='flex flex-col justify-between items-center md:gap-2 lg:gap-3 xl:gap-4 lg:flex-row'>
					<div className='max-w-[45ch] font-semibold lg:text-lg xl:text-xl'>
						Not just a board, <span className='italic'>your</span> board. Design
						a board that is as real as the places you take it.
					</div>
					<ButtonLink icon='skateboard' size='lg' className='z-20 mt-2 block'>
						Build Your Board
					</ButtonLink>
				</div>
			</div>
			<InteractiveSkateboard />
		</Bounded>
	)
}

export default Hero

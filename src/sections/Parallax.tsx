import { Bounded } from '@/components/Bounded'
import { ButtonLink } from '@/components/ButtonLink'
import { Heading } from '@/components/Heading'

const Parallax = () => {
	return (
		<Bounded className='bg-[var(--brand-blue)] bg-texture text-white'>
			<Heading size='lg' as='h2'>
				Crafted for the kickflip
			</Heading>
			<div className='mb-8' />
			<div className='max-w-md leading-relaxed text-lg'>
				Build for big tricks and hard landings, our boards are designed to
				handle every flip, grind, and bail. Perfect balance, every time.
			</div>
			<div className='mb-8' />
			<ButtonLink color='lime'>Shop Boards</ButtonLink>
		</Bounded>
	)
}

export default Parallax

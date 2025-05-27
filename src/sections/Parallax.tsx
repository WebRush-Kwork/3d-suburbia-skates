import { Bounded } from '@/components/Bounded'
import { ButtonLink } from '@/components/ButtonLink'
import { Heading } from '@/components/Heading'
import Image from 'next/image'

const Parallax = () => {
	return (
		<Bounded className='bg-[var(--brand-blue)] bg-texture text-white'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center'>
				<div className='flex flex-col items-center md:items-start md:text-start gap-8'>
					<Heading size='lg' as='h2'>
						Crafted for the kickflip
					</Heading>
					<div className='max-w-md leading-relaxed text-lg'>
						Build for big tricks and hard landings, our boards are designed to
						handle every flip, grind, and bail. Perfect balance, every time.
					</div>
					<div>
						<ButtonLink color='lime'>Shop Boards</ButtonLink>
					</div>
				</div>
				<div className='grid grid-cols-1 grid-rows-1 place-items-center'>
					<div className='col-start-1 row-start-1 transition-transform'>
						<Image
							src='/paint-background.png'
							alt=''
							width={400}
							height={500}
						/>
					</div>
					<div className='col-start-1 row-start-1 transition-transform'>
						<Image src='/guy-1.png' alt='' width={330} height={500} />
					</div>
				</div>
			</div>
		</Bounded>
	)
}

export default Parallax

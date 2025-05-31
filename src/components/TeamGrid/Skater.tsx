import Image from 'next/image'
import clsx from 'clsx'
import { TTeamGrid } from '@/data/team'
import { SkaterScribble } from './SkaterScribble'
import { ButtonLink } from '../ButtonLink'

const Skater = ({
	background,
	foreground,
	firstName,
	lastName,
	color
}: TTeamGrid) => {
	return (
		<div className='flex flex-col gap-4'>
			<div className='relative group overflow-hidden max-w-[445px] max-h-[600px]'>
				<div className='grid place-items-center grid-cols-1 grid-rows-1'>
					<div className='col-start-1 row-start-1'>
						<Image
							src={background}
							alt=''
							width={500}
							height={500}
							className='duration-1000 ease-in-out 0.2s group-hover:brightness-75 group-hover:saturate-50'
						/>
					</div>
					<div className='col-start-1 row-start-1 z-20'>
						<Image
							src={foreground}
							alt=''
							width={500}
							height={500}
							className='group-hover:scale-110 duration-1000 ease-in-out 0.2s'
						/>
					</div>
					<SkaterScribble
						className={clsx(
							'z-10 col-start-1 row-start-1 group-hover:[&>path]:[stroke-dashoffset:0]',
							color === 'blue' && 'text-[#4876ff]',
							color === 'lime' && 'text-[#d9f154]',
							color === 'orange' && 'text-[#ff7347]',
							color === 'pink' && 'text-[#f7d0e9]'
						)}
					/>
				</div>
				<div className='absolute inset-0 h-96 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent' />
				<div className='text-2xl lg:text-3xl text-white font-sans absolute bottom-2 left-2 z-20'>
					<span>{firstName}</span>
					<span className='block'>{lastName}</span>
				</div>
			</div>
			<div className='flex justify-center'>
				<ButtonLink size='sm'>Build their boards</ButtonLink>
			</div>
		</div>
	)
}

export default Skater

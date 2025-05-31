import { TTeamGrid } from '@/data/team'
import Image from 'next/image'

const Skater = ({ background, foreground, name }: TTeamGrid) => {
	return (
		<div className='relative group overflow-hidden'>
			<div className='grid place-items-center grid-cols-1 grid-rows-1'>
				<div className='col-start-1 row-start-1'>
					<Image src={background} alt='' width={500} height={500} />
				</div>
				<div className='col-start-1 row-start-1'>
					<Image
						src={foreground}
						alt=''
						width={500}
						height={500}
						className='group-hover:scale-125 duration-500 ease-in-out'
					/>
				</div>
			</div>
			<span className='text-2xl lg:text-3xl text-white font-sans absolute bottom-2 left-2'>
				{name}
			</span>
		</div>
	)
}

export default Skater

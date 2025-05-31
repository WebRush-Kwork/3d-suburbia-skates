import { Bounded } from '@/components/Bounded'
import { Heading } from '@/components/Heading'
import { teamGrid } from '@/data/team'
import { Fragment } from 'react'
import Skater from '@/components/TeamGrid/Skater'

const TeamGrid = () => {
	return (
		<Bounded className='bg-texture bg-brand-navy'>
			<Heading as='h2' className='mb-8 text-center text-white'>
				The Team
			</Heading>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-4 place-items-center'>
				{teamGrid.map((member, i) => (
					<Fragment key={i}>
						<Skater {...member} />
					</Fragment>
				))}
			</div>
		</Bounded>
	)
}

export default TeamGrid

import { Bounded } from '@/components/Bounded'
import { Heading } from '@/components/Heading'
import Skater from '@/components/TeamGrid/Skater'
import { teamGrid } from '@/data/team'
import Image from 'next/image'
import { Fragment } from 'react'

const TeamGrid = () => {
	return (
		<Bounded className='bg-texture bg-brand-navy'>
			<Heading as='h2' className='mb-8 text-center text-white'>
				The Team
			</Heading>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
				{teamGrid.map((member, i) => (
					<Fragment key={i}>
						<Skater
							name={member.name}
							background={member.background}
							foreground={member.foreground}
						/>
					</Fragment>
				))}
			</div>
		</Bounded>
	)
}

export default TeamGrid

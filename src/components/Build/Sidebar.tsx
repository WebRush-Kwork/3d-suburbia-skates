import { ButtonLink } from '@/components/ButtonLink'
import { Heading } from '@/components/Heading'

const Sidebar = () => {
	return (
		<div className='w-96 bg-texture bg-zinc-900 text-white lg:grow-0 p-4 md:p-6 z-10'>
			<Heading size='sm' className='mb-6'>
				Build your board
			</Heading>
			<ButtonLink icon='plus' color='lime'>
				Add to cart
			</ButtonLink>
		</div>
	)
}

export default Sidebar

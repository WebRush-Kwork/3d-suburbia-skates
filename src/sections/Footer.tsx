import { Bounded } from '@/components/Bounded'
import Nav from '@/components/Nav'

const Footer = () => {
	return (
		<Bounded
			as='footer'
			className='bg-texture bg-zinc-900 text-white overflow-hidden'
		>
			<Nav />
		</Bounded>
	)
}

export default Footer

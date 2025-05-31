import { Bounded } from '@/components/Bounded'
import { FooterPhysics } from '@/components/Footer/FooterPhysics'
import { Logo } from '@/components/Logo'
import Nav from '@/components/Nav'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer className='bg-texture bg-zinc-900 text-white overflow-hidden'>
			<div className='relative h-[75vh] p-10 md:p-14 lg:p-16'>
				<Image
					src='/pexels-artempodrez-4816744.jpg'
					alt=''
					fill
					className='object-cover'
				/>
				<Logo className='h-20 pointer-events-none mix-blend-exclusion md:h-28' />
			</div>
			<Bounded as='div'>
				<Nav />
			</Bounded>
		</footer>
	)
}

export default Footer

import { FooterPhysics } from '@/components/Footer/FooterPhysics'
import { Logo } from '@/components/Logo'
import { physicsFooter } from '@/data/physics'
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
				<FooterPhysics
					boardTextureURLs={physicsFooter}
					className='absolute inset-0 overflow-hidden'
				/>
				<Logo className='h-20 pointer-events-none mix-blend-exclusion md:h-28' />
			</div>
			<div className='px-6 py-10 md:py-12 lg:py-16'>
				<Nav />
			</div>
		</footer>
	)
}

export default Footer

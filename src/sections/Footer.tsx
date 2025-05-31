import Nav from '@/components/Nav'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer className='bg-texture bg-zinc-900 text-white overflow-hidden'>
			<div className='relative h-[75vh]'>
				<Image
					src='/pexels-artempodrez-4816744.jpg'
					alt=''
					fill
					className='object-cover'
				/>
			</div>
			<div className='px-6 py-10 md:py-12 lg:py-16'>
				<Nav />
			</div>
		</footer>
	)
}

export default Footer

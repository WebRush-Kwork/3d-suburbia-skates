import Link from 'next/link'
import Nav from './Nav'
import { ButtonLink } from './ButtonLink'
import { Logo } from './Logo'

const Header = () => {
	return (
		<header className='z-50 absolute inset-0 p-4 md:p-5 lg:p-6 h-32 md:h-40 lg:h-48'>
			<div className='max-w-6xl grid grid-cols-[auto_auto] items-center gap-6 md:grid-cols-[1fr_auto_1fr] mx-auto'>
				<Link href='/'>
					<Logo className='text-[#692e54] h-12 md:h-14 lg:h-16 xl:h-20' />
				</Link>
				<Nav />
				<div className='justify-self-end'>
					<ButtonLink icon='cart' color='purple' aria-label='Cart (1)'>
						<span className='md:hidden'>1</span>
						<span className='hidden md:inline'>Cart (1)</span>
					</ButtonLink>
				</div>
			</div>
		</header>
	)
}

export default Header

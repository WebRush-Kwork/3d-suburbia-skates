import Link from 'next/link'
import { ButtonLink } from './ButtonLink'
import { Logo } from './Logo'

const Header = () => {
	return (
		<header className='z-50 absolute inset-0 p-4 md:p-5 lg:p-6 h-32 md:h-40 lg:h-48'>
			<div className='max-w-6xl grid grid-cols-[auto_auto] items-center gap-6 md:grid-cols-[1fr_auto_1fr] mx-auto'>
				<Link href='/'>
					<Logo className='text-[var(--brand-purple)] h-12 md:h-14 lg:h-16 xl:h-20' />
				</Link>
				<nav
					aria-label='Main'
					className='col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1'
				>
					<ul className='flex flex-wrap justify-center items-center gap-8'>
						<li>
							<Link href='/' className='text-lg md:text-xl'>
								Team
							</Link>
						</li>
						<li>
							<Link href='/build' className='text-lg md:text-xl'>
								Customizer
							</Link>
						</li>
						<li>
							<Link href='/' className='text-lg md:text-xl'>
								About
							</Link>
						</li>
					</ul>
				</nav>
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

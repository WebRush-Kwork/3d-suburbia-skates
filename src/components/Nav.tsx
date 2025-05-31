import Link from 'next/link'

const Nav = () => {
	return (
		<nav
			aria-label='Main'
			className='col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1'
		>
			<ul className='flex flex-wrap justify-center items-center gap-8'>
				<li>
					<Link
						href='/'
						className='text-lg md:text-xl hover:underline transition-all duration-300'
					>
						Team
					</Link>
				</li>
				<li>
					<Link
						href='/build'
						className='text-lg md:text-xl hover:underline transition-all duration-300'
					>
						Customizer
					</Link>
				</li>
				<li>
					<Link
						href='/'
						className='text-lg md:text-xl hover:underline transition-all duration-300'
					>
						About
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav

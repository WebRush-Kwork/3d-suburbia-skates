import clsx from 'clsx'

type HeadingProps = {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
	children: React.ReactNode
	className?: string
}

export function Heading({
	as: Comp = 'h1',
	className,
	children,
	size = 'lg',
}: HeadingProps) {
	return (
		<Comp
			className={clsx(
				'font-sans uppercase',
				size === 'xl' && 'text-4xl lg:text-6xl xl:text-7xl',
				size === 'lg' && 'md:text-3xl lg:text-5xl xl:text-7xl',
				size === 'md' && 'md:text-2xl lg:text-4xl xl:text-5xl',
				size === 'sm' && 'md:text-xl lg:text-2xl xl:text-4xl',
				size === 'xs' && 'md:text-base lg:text-lg xl:text-xl',
				className
			)}
		>
			{children}
		</Comp>
	)
}

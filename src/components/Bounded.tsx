import clsx from 'clsx'

interface BoundedProps {
	as?: React.ElementType
	className?: string
	style?: React.CSSProperties
	children: React.ReactNode
}

export function Bounded({
	as: Comp = 'section',
	className,
	children,
	...restProps
}: BoundedProps) {
	return (
		// @ts-expect-error because it should be
		<Comp
			// @ts-expect-error because it should be
			className={clsx(
				'px-6 py-10 md:py-12 lg:py-16 [.header+&]:pt-44 [.header+&]:md:pt-32',
				className
			)}
			{...restProps}
		>
			<div className='mx-auto w-full max-w-6xl'>{children}</div>
		</Comp>
	)
}

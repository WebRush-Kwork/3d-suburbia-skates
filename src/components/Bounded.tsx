import { CSSProperties, ElementType, ReactNode } from 'react'
import clsx from 'clsx'

type BoundedProps = {
	as?: ElementType
	className?: string
	style?: CSSProperties
	children: ReactNode
}

export function Bounded({
	as: Comp = 'section',
	className,
	children,
	...restProps
}: BoundedProps) {
	return (
		<Comp
			className={clsx(
				'px-6 md:py-10 lg:py-12 xl:py-16 [.header+&]:pt-44 [.header+&]:md:pt-32',
				className
			)}
			{...restProps}
		>
			<div className='mx-auto w-full max-w-6xl'>{children}</div>
		</Comp>
	)
}

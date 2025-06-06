import { Bounded } from '@/components/Bounded'
import { ButtonLink } from '@/components/ButtonLink'
import { Heading } from '@/components/Heading'
import { FaStar } from 'react-icons/fa6'
import { productsGrid } from '@/data/products'
import Image from 'next/image'
import { HorizontalLine, VerticalLine } from '@/components/ProductGrid/Line'
import { Scribble } from '@/components/ProductGrid/Scribble'
import SlideIn from '@/components/SlideIn'

const ProductGrid = () => {
	return (
		<Bounded className='bg-[var(--brand-gray)] bg-texture'>
			<div className='text-center'>
				<SlideIn>
					<Heading className='mb-4 md:mb-5 lg:mb-6' as='h2'>
						Latest Drop
					</Heading>
				</SlideIn>
				<SlideIn>
					<div className='mb-6 md:mb-8 lg:mb-9 xl:mb-10'>
						Grab our freshest designs before they sell out!
					</div>
				</SlideIn>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
				{productsGrid.map((product, i) => (
					<div
						key={i}
						className='w-full group relative max-w-72 mx-auto px-8 pt-4'
					>
						<VerticalLine className='absolute left-4 h-full top-0 stroke-2 text-stone-300 group-hover:text-stone-400 transition-colors duration-200' />
						<VerticalLine className='absolute right-4 h-full top-0 stroke-2 text-stone-300 group-hover:text-stone-400 transition-colors duration-200' />
						<HorizontalLine className='stroke-2 text-stone-300 group-hover:text-stone-400 -mx-8' />
						<div className='flex items-center justify-between text-lg md:text-xl lg:text-2xl'>
							<span>${product.price}</span>
							<span className='flex items-center gap-1'>
								<FaStar className='text-yellow-400' />
								37
							</span>
						</div>
						<div className='-mb-1 py-4 overflow-hidden'>
							<Scribble className='absolute inset-0' color={product.colorHex} />
							<Image
								src={product.image}
								alt={product.text}
								width={150}
								height={150}
								className='mx-auto group-hover:scale-150 duration-500 ease-in-out w-[58%] origin-top'
							/>
						</div>
						<HorizontalLine className='stroke-2 text-stone-300 group-hover:text-stone-400 -mx-8' />
						<div className='font-sans text-center my-2 leading-tight text-lg md:text-xl'>
							{product.text}
						</div>
						<div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-200'>
							<ButtonLink href={product.url}>Customize</ButtonLink>
						</div>
					</div>
				))}
			</div>
		</Bounded>
	)
}

export default ProductGrid

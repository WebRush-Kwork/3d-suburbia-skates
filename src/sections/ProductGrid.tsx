import { Bounded } from '@/components/Bounded'
import { ButtonLink } from '@/components/ButtonLink'
import { Heading } from '@/components/Heading'
import { FaStar } from 'react-icons/fa6'
import { productsGrid } from '@/data/products'
import Image from 'next/image'

const ProductGrid = () => {
	return (
		<Bounded className='bg-[var(--brand-gray)] bg-texture'>
			<div className='text-center'>
				<Heading className='mb-4 md:mb-5 lg:mb-6' as='h2'>
					Latest Drop
				</Heading>
				<div className='mb-6 md:mb-8 lg:mb-9 xl:mb-10'>
					Grab our freshest designs before they sell out!
				</div>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
				{productsGrid.map((product, i) => (
					<div key={i} className='w-full mx-auto px-8 pt-4 group relative'>
						<div className='max-w-72 mx-auto'>
							<div className='flex items-center justify-between text-lg md:text-xl lg:text-2xl'>
								<span>${product.price}</span>
								<span className='flex items-center gap-1'>
									<FaStar className='text-yellow-400' />
									37
								</span>
							</div>
						</div>
						<div className='py-4 overflow-hidden'>
							<Image
								src={product.url}
								alt={product.text}
								width={150}
								height={150}
								className='mx-auto group-hover:scale-150 duration-500 ease-in-out'
							/>
						</div>
						<div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-200'>
							<ButtonLink>Customize</ButtonLink>
						</div>
					</div>
				))}
			</div>
		</Bounded>
	)
}

export default ProductGrid

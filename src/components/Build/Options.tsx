import { Heading } from '@/components/Heading'
import { TColors, TTextures } from '@/types/context.types'
import clsx from 'clsx'
import Image from 'next/image'

interface IOptions {
	textures?: TTextures[]
	colors?: TColors[]
	title: string
	selectedOption?: TTextures | TColors
	setSelectedTextureOption?: ({ name, url }: TTextures) => void
	setSelectedColorOption?: ({ name, hex }: TColors) => void
}

const Options = ({
	title,
	colors,
	selectedOption,
	textures,
	setSelectedTextureOption,
	setSelectedColorOption
}: IOptions) => {
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex gap-2 flex-wrap'>
				<Heading size='xs' as='h2'>
					{title}
				</Heading>
				<p className='text-zinc-300'>
					<span className='text-zinc-500'>| </span>
					{selectedOption
						? selectedOption.name
						: textures
						? textures[0].name
						: colors && colors[0].name}
				</p>
			</div>
			<div className='flex gap-2 flex-wrap'>
				{textures && setSelectedTextureOption && (
					<>
						{textures.map(texture => (
							<div key={texture.name} className='size-10'>
								<Image
									src={texture.url}
									alt=''
									width={36}
									height={36}
									className={clsx(
										'rounded-full w-9 h-9',
										selectedOption &&
											selectedOption.name === texture.name &&
											'outline-2 outline-white'
									)}
									onClick={() =>
										setSelectedTextureOption({
											name: texture?.name,
											url: texture?.url
										})
									}
								/>
							</div>
						))}
					</>
				)}
				{colors && setSelectedColorOption && (
					<>
						{colors.map(color => (
							<div
								key={color.name}
								style={{ background: color.hex }}
								className={clsx(
									'size-9 rounded-full',
									selectedOption === color && 'outline-2 outline-white'
								)}
								onClick={() => setSelectedColorOption(color)}
							/>
						))}
					</>
				)}
			</div>
		</div>
	)
}

export default Options

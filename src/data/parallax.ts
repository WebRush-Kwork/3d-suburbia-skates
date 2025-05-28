type TParallaxData = {
	title: string
	description: string
	order: 1 | 2
}

export const parallaxData: TParallaxData[] = [
	{
		title: 'Crafted for the Kickflip',
		description:
			'Built for big tricks and hard landings, our boards are designed to handle every flip, grind, and bail. Perfect balance, every time.',
		order: 1
	},
	{
		title: 'Not Just a Deck, It’s Your Canvas',
		description:
			'Each board is a canvas for expression, crafted for those who treat the backstreets as their own art gallery.',
		order: 2
	},
	{
		title: 'Built for Hard Landings',
		description:
			'Skateboarding isn’t always smooth. Our boards are built tough to survive the scuffs, scratches, and slams that come with real skating.',
		order: 1
	},
	{
		title: 'Fueling the Next Generation',
		description:
			'We’re committed to supporting young skaters and DIY projects, giving back to the communities that keep skateboarding alive and evolving.',
		order: 2
	}
]

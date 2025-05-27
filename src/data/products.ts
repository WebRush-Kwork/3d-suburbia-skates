type TProductsGrid = {
	url: string
	colorHex: string
	price: number
	text: string
}

export const productsGrid: TProductsGrid[] = [
	{
		text: 'Oni mask',
		price: 59.99,
		url: '/onimask-complete.png',
		colorHex: '#b75648'
	},
	{
		text: 'Pink drop',
		price: 89.99,
		url: '/pink-drop-complete.png',
		colorHex: '#f34e79'
	},
	{
		text: 'Thank you',
		price: 69.99,
		url: '/thank-you-complete.png',
		colorHex: '#fe473c'
	},
	{
		text: 'Yellow & Black',
		price: 69.99,
		url: '/yellow-black-complete.png',
		colorHex: '#c8a73b'
	}
]

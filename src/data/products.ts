type TProductsGrid = {
	url: string
	image: string
	colorHex: string
	price: number
	text: string
}

export const productsGrid: TProductsGrid[] = [
	{
		text: 'Oni mask',
		price: 59.99,
		image: '/onimask-complete.png',
		colorHex: '#b75648',
		url: '/build?wheel=cream&deck=oni+mask&trucks=dark+gray&bolts=dark+gray'
	},
	{
		text: 'Pink drop',
		price: 89.99,
		image: '/pink-drop-complete.png',
		colorHex: '#f34e79',
		url: '/build?wheel=cream&deck=pink+swirl&trucks=off+white&bolts=off+white'
	},
	{
		text: 'Thank you',
		price: 69.99,
		image: '/thank-you-complete.png',
		colorHex: '#fe473c',
		url: '/build?wheel=red&deck=thank+you&trucks=off+white&bolts=off+white'
	},
	{
		text: 'Yellow & Black',
		price: 69.99,
		image: '/yellow-black-complete.png',
		colorHex: '#c8a73b',
		url: '/build?wheel=yellow&deck=yellow+and+black&trucks=black&bolts=yellow'
	}
]

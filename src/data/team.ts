export type TTeamGrid = {
	firstName: string
	lastName: string
	foreground: string
	background: string
	url: string
	color: 'lime' | 'blue' | 'orange' | 'pink'
}

export const teamGrid: TTeamGrid[] = [
	{
		firstName: 'Sophie',
		lastName: 'Castillo',
		background: '/sophie-back.png',
		foreground: '/sophie-front.png',
		color: 'blue',
		url: '/build?wheel=yellow&deck=yellow+and+black&trucks=black&bolts=yellow'
	},
	{
		firstName: 'Dylan',
		lastName: 'Foster',
		background: '/dylan-back.png',
		foreground: '/dylan-front.png',
		color: 'lime',
		url: '/build?wheel=red&deck=thank+you&trucks=off+white&bolts=off+white'
	},
	{
		firstName: 'Carter',
		lastName: 'Bell',
		background: '/carter-back.png',
		foreground: '/carter-front.png',
		color: 'orange',
		url: '/build?wheel=cream&deck=pink+swirl&trucks=off+white&bolts=off+white'
	},
	{
		firstName: 'Jordan',
		lastName: 'Lee',
		background: '/jordan-back.png',
		foreground: '/jordan-front.png',
		color: 'pink',
		url: '/build?wheel=cream&deck=oni+mask&trucks=dark+gray&bolts=dark+gray'
	}
]

export type TTeamGrid = {
	firstName: string
	lastName: string
	foreground: string
	background: string
	color: 'lime' | 'blue' | 'orange' | 'pink'
}

export const teamGrid: TTeamGrid[] = [
	{
		firstName: 'Sophie',
		lastName: 'Castillo',
		background: '/sophie-back.png',
		foreground: '/sophie-front.png',
		color: 'blue'
	},
	{
		firstName: 'Dylan',
		lastName: 'Foster',
		background: '/dylan-back.png',
		foreground: '/dylan-front.png',
		color: 'lime'
	},
	{
		firstName: 'Carter',
		lastName: 'Bell',
		background: '/carter-back.png',
		foreground: '/carter-front.png',
		color: 'orange'
	},
	{
		firstName: 'Jordan',
		lastName: 'Lee',
		background: '/jordan-back.png',
		foreground: '/jordan-front.png',
		color: 'pink'
	}
]

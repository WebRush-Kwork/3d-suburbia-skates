import type { Metadata } from 'next'
import { DM_Mono, Bowlby_One_SC } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const bowlby = Bowlby_One_SC({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-bowlby',
	weight: '400',
})

const dmMono = DM_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-dm-mono',
	weight: '500',
})

export const metadata: Metadata = {
	title: 'Suburbia Skateboards',
	description: 'Created by the CTO of Oblivion Labs',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${bowlby.variable} ${dmMono.variable} antialiased font-medium text-zinc-800 font-mono`}
			>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}

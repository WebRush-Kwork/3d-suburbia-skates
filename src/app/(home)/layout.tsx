import Header from '@/components/Header'
import Footer from '@/sections/Footer'

interface ILayout {
	children: React.ReactNode
}

const Layout = ({ children }: ILayout) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout

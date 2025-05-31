import Hero from '@/sections/Hero'
import Parallax from '@/sections/Parallax'
import ProductGrid from '@/sections/ProductGrid'
import TeamGrid from '@/sections/TeamGrid'
import Video from '@/sections/Video'

export default function Home() {
	return (
		<>
			<Hero />
			<ProductGrid />
			<Parallax />
			<Video />
			<TeamGrid />
		</>
	)
}

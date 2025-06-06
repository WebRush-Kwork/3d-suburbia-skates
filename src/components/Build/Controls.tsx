'use client'

import { wheelTextureUrls } from '@/data/wheels'
import { deckTextureUrls } from '@/data/decks'
import { useCustomizerControls } from '@/app/build/context'
import { colors } from '@/data/colors'
import { useRouter } from 'next/navigation'
import Options from './Options'
import { useEffect } from 'react'

const Controls = () => {
	const {
		selectedWheel,
		setSelectedWheel,
		selectedDeck,
		setSelectedDeck,
		selectedBolts,
		setSelectedBolts,
		selectedTrucks,
		setSelectedTrucks
	} = useCustomizerControls()

	const { replace } = useRouter()

	useEffect(() => {
		const url = new URL(window.location.href)

		if (selectedWheel) url.searchParams.set('wheel', selectedWheel.name)
		if (selectedDeck) url.searchParams.set('deck', selectedDeck.name)
		if (selectedTrucks) url.searchParams.set('trucks', selectedTrucks.name)
		if (selectedBolts) url.searchParams.set('bolts', selectedBolts.name)

		replace(url.href)
	}, [replace, selectedWheel, selectedDeck, selectedBolts, selectedTrucks])

	return (
		<div className='flex flex-col gap-6 mb-6'>
			<Options
				title='Deck'
				selectedOption={selectedDeck}
				setSelectedTextureOption={setSelectedDeck}
				textures={deckTextureUrls}
			/>
			<Options
				title='Wheels'
				selectedOption={selectedWheel}
				setSelectedTextureOption={setSelectedWheel}
				textures={wheelTextureUrls}
			/>
			<Options
				title='Bolts'
				colors={colors}
				setSelectedColorOption={setSelectedBolts}
				selectedOption={selectedBolts}
			/>
			<Options
				title='Trucks'
				colors={colors}
				setSelectedColorOption={setSelectedTrucks}
				selectedOption={selectedTrucks}
			/>
		</div>
	)
}

export default Controls

'use client'

import { wheelTextureUrls } from '@/data/wheels'
import { deckTextureUrls } from '@/data/decks'
import { useCustomizerControls } from '@/app/build/context'
import Options from './Options'
import { colors } from '@/data/colors'

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

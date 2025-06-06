'use client'

import { TColors, TTextures } from '@/types/context.types'
import { createContext, useContext, useMemo, useState } from 'react'

type TCustomizerControlsContext = {
	selectedWheel?: TTextures
	setSelectedWheel: ({ url, name }: TTextures) => void
	selectedDeck?: TTextures
	setSelectedDeck: ({ url, name }: TTextures) => void
	selectedTrucks?: TColors
	setSelectedTrucks: ({ name, hex }: TColors) => void
	selectedBolts?: TColors
	setSelectedBolts: ({ name, hex }: TColors) => void
}

const defaultContext: TCustomizerControlsContext = {
	setSelectedWheel: () => {},
	setSelectedDeck: () => {},
	setSelectedTrucks: () => {},
	setSelectedBolts: () => {}
}

const CustomizerControlsContext = createContext(defaultContext)

type TCustomizerControlsProvider = {
	children?: React.ReactNode
}

export function CustomizerControlsProvider({
	children
}: TCustomizerControlsProvider) {
	const [selectedWheel, setSelectedWheel] = useState<TTextures>()
	const [selectedDeck, setSelectedDeck] = useState<TTextures>()
	const [selectedBolts, setSelectedBolts] = useState<TColors>()
	const [selectedTrucks, setSelectedTrucks] = useState<TColors>()

	const value = useMemo(() => {
		return {
			selectedWheel,
			setSelectedWheel,
			selectedDeck,
			setSelectedDeck,
			selectedBolts,
			setSelectedBolts,
			selectedTrucks,
			setSelectedTrucks
		}
	}, [selectedWheel, selectedDeck, selectedBolts, selectedTrucks])

	return (
		<CustomizerControlsContext.Provider value={value}>
			{children}
		</CustomizerControlsContext.Provider>
	)
}

export function useCustomizerControls() {
	return useContext(CustomizerControlsContext)
}

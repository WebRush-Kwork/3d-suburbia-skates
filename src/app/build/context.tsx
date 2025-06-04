'use client'

import { createContext, useContext, useMemo, useState } from 'react'

const defaultContext = {}

const CustomizerControlsContext = createContext(defaultContext)

type TCustomizerControlsProvider = {
	children?: React.ReactNode
}

export function CustomizerControlsProvider({
	children
}: TCustomizerControlsProvider) {
	const [selectedWheel, setSelectedWheel] = useState()
	const [selectedDeck, setSelectedDeck] = useState()
	const [selectedBolt, setSelectedBolt] = useState()
	const [selectedTruck, setSelectedTruck] = useState()

	const value = useMemo(() => {
		return {
			selectedWheel,
			setSelectedWheel,
			selectedDeck,
			setSelectedDeck,
			selectedBolt,
			setSelectedBolt,
			selectedTruck,
			setSelectedTruck
		}
	}, [selectedWheel, selectedDeck, selectedBolt, selectedTruck])

	return (
		<CustomizerControlsContext.Provider value={value}>
			{children}
		</CustomizerControlsContext.Provider>
	)
}

export function useCustomizerControls() {
	return useContext(CustomizerControlsContext)
}

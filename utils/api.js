import { AsyncStorage } from 'react-native'

export const getDecks = async () => {
  let val = await AsyncStorage.getItem('DECKS');
  if (val === null){
    await AsyncStorage.setItem('DECKS', JSON.stringify({}))
  }
  return AsyncStorage.getItem('DECKS');
}

export const addDeck = async (deck) => {
  await getDecks()

  return AsyncStorage.mergeItem('DECKS', JSON.stringify({
    [deck.title]: deck
  }))
}

export const addQuestion = (question, deckName) => {
  return AsyncStorage.getItem('DECKS').then(
    results => {
      const data = JSON.parse(results)
      data[deckName].questions.push(question)
      return AsyncStorage.setItem('DECKS', JSON.stringify(data))
    }
  )
}

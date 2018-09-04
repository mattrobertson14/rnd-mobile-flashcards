export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';

export const receiveDecks = (decks) => {
  return {
    type : RECEIVE_DECKS,
    decks
  }
}

export const addDeck = (deck) => {
  return {
    type: ADD_DECK,
    deck
  }
}

export const addQuestion = (deckName, question) => {
  return {
    type: ADD_QUESTION,
    deckName,
    question
  }
}

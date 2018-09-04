import { ADD_DECK, ADD_QUESTION, RECEIVE_DECKS } from '../actions'

let initialState = {
  decks : {}
}

const reducer = ( state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        decks: action.decks
      }
    case ADD_DECK :
      return {
        ...state,
        decks: { ...state.decks, [action.deck.title] : action.deck }
      }
    case ADD_QUESTION :
      let newDeck = { ...state.decks[action.deckName] }
      newDeck.questions = [ ...newDeck.questions, action.question]
      return {
        ...state,
        decks : {
          ...state.decks,
          [action.deckName]: newDeck
        }
      }
    default :
      return state
  }
}

export default reducer

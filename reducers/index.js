import { 
  RECEIVE_DECKS, 
  DECK_NEW,
  ADD_CARD,
} from '../actions/index';

function deck (state = {}, action ) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return { 
        ...state,
        ...action.decks
      } 

    case DECK_NEW:
      return {
        ...state,
        [action.deckKey]: [] 
      }

    case ADD_CARD:
      const { question, answer, deckKey } = action.card;
      return {
        ...state,
        [deckKey] : [
          ...state[deckKey],
          { question, answer }
        ]
      }

    default:
      return state;
  }
}

export default deck;
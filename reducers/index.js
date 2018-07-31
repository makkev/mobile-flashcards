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
        decks: action.decks
      }

    case DECK_NEW:
      return {
        ...state,
        ...{ [action.deckKey] : { title: action.deckKey, questions: [] } }
      }

    case ADD_CARD:
      const { question, answer, deckKey } = action.card;
      return {
        ...state,
        [deckKey] : {
          ...state[deckKey],
          questions: [...state[deckKey].questions, { question, answer }]
        }
      }

    default:
      return state;
  }
}

export default deck;
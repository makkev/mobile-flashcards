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
      console.log(action.card);
      console.log(state);
      return {
        ...state,
        [deckKey] : {
          ...state.decks[deckKey],
          questions: [...state.decks[deckKey].questions, { question, answer }]
        }
      }

    default:
      return state;
  }
}

export default deck;
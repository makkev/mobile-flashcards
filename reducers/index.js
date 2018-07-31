import { 
  RECEIVE_DECKS, 
  DECK_NEW,
  ADD_CARD,
} from '../actions/index';

function deck (state = {}, action ) {
  switch (action.type) {
    case RECEIVE_DECKS:
      // return { ...action.decks }
      return { ...state, ... action.decks } 

    case DECK_NEW:
      result = {
        ...state,
        ...{ [action.deckKey] : { title: action.deckKey, questions: [] } }
      }
      // console.log('**********');
      // console.log(result);
      return result;

    case ADD_CARD:
      const { question, answer, deckKey } = action.card;
      console.log(action.card);
      console.log(state);
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
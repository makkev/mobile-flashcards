import { 
  RECEIVE_DECKS, 
  DECK_NEW,
  ADD_CARD,
} from '../actions/index';

function deck (state = {}, action ) {
  let deck;
  switch (action.type) {
    case RECEIVE_DECKS:
      // console.log(action.decks);
      // return { ...action.decks }
      return { 
        ...state,
        ...action.decks
      } 

    case DECK_NEW:
      // return {
      //   ...state,
      //   ...{ [action.deckKey] : { title: action.deckKey, questions: [] } }
      // }
      return {
        ...state,
        [action.deckKey]: [] 
      }

    case ADD_CARD:
      const { question, answer, deckKey } = action.card;
      // return {
      //   ...state,
      //   [deckKey] : {
      //     ...state[deckKey],
      //     questions: [...state[deckKey].questions, { question, answer }]
      //   }
      // }
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
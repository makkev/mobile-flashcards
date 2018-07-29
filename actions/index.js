export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const DECK_NEW = 'DECK_NEW';
export const ADD_CARD = 'ADD_CARD';

export function deckNew (deckKey) {
  return {
    type: DECK_NEW,
    deckKey,
  }
}

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addCard (card) {
  return {
    type: ADD_CARD,
    card,
  }
}

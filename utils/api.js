import { AsyncStorage } from 'react-native'
const DATA_STORAGE_KEY = 'KM: deck3';

const sampleData = {
  React: [
    {
      question: 'What is React?',
      answer: 'A library for managing user interfaces'
    },
    {
      question: 'Where do you make Ajax requests in React?',
      answer: 'The componentDidMount lifecycle event'
    }
  ],
  Javascript: [
    {
      question: 'What is a closure?',
      answer: 'The combination of a function and the lexical environment within which that function was declared.'
    }
  ],
}

export const getData = () => sampleData;

// export function getDecks () {
//   AsyncStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(sampleData));
//   return(sampleData);
// }

export function getDecks () {
  return AsyncStorage.getItem(DATA_STORAGE_KEY).then(items => JSON.parse(items));
}

export function createDeck (title) {
  return AsyncStorage.mergeItem(DATA_STORAGE_KEY, JSON.stringify({
    [title]: []
  }));
}

export  function addCardToDeck (deckKey, newCard) {
  return AsyncStorage.getItem(DATA_STORAGE_KEY)
    .then(items => JSON.parse(items))
    .then(items => {
      items[deckKey].push(newCard);
      AsyncStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(items));
      return items;
    });

}

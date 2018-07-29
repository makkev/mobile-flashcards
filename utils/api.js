import { AsynchStorage } from 'react-native'
const DATA_STORAGE_KEY = 'KM: data';

const sampleData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export const getData = () => sampleData;

export function getDecks () {
  AsynchStorage.getItem(DATA_STORAGE_KEY)
    .then(results => {
      // console.log(results);
      return results === null 
        ? AsynchStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(sampleData))
        : JSON.parse(results)
    });
} 

export const saveDeckTitle = title =>
  AsynchStorage.getItem(DATA_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: [],
    }
  }));

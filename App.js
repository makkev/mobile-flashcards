import React from 'react';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore } from 'redux';
import { StyleSheet, Text, View, Platform } from 'react-native';
import DeckList from './components/DeckList';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import DeckNew from './components/DeckNew';
import DeckIndividual from './components/DeckIndividual';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';
import { setLocalNotification } from './utils/helpers';


const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: ({ tintColor }) =>
        <MaterialCommunityIcons name='cards-variant' size={30} color={tintColor}/> 
    }
  },
  DeckNew: {
    screen: DeckNew,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) =>
        <FontAwesome name='plus-square' size={30} color={tintColor}/> 
    }
  }
}, 
  {
    tabBarOptions: {
      activeBackgroundColor: Platform.OS === 'ios' ? '#eee8d5' : 'white',
      activeTintColor: Platform.OS === 'ios' ? '#d33682' : 'white',
      inactiveTintColor: 'gray',
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? '#002b36': '#268bd2',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
      },
      shadowRadius: 6,
      shadowOpacity: 1,
      showIcon: true,
      showLabel: true,
    }
  }
)

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
        title: 'Main',
        headerTintColor: '#b58900',
        headerStyle: {
          backgroundColor: '#eee8d5',
        }
    }
  },
  DeckIndividual: {
    screen: DeckIndividual,
    navigationOptions: {
      title: 'Deck',
      headerTintColor: '#586e75',
      headerStyle: {
        backgroundColor: '#eee8d5',
      }
    }
  },
  AddCard: {
    screen: AddCard,
      navigationOptions: {
        title: 'AddCard',
        headerTintColor: '#586e75',
        headerStyle: {
          backgroundColor: '#eee8d5',
        }
      }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: '#586e75',
      headerStyle: {
        backgroundColor: '#eee8d5',
      }
    }
  }
})


export default class App extends React.Component {

  componentDidMount () {
    setLocalNotification();
  }

  render() {
    store = createStore(reducer);
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

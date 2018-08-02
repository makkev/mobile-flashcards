import React from 'react';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore } from 'redux';
import { StyleSheet, Text, View, Platform } from 'react-native';
import DeckList from './components/DeckList';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { purple, white, blue } from './utils/colors';
import DeckNew from './components/DeckNew';
import DeckIndividual from './components/DeckIndividual';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';

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
      activeBackgroundColor: Platform.OS === 'ios' ? purple : white,
      // activeBackgroundColor: purple,
      style: {
        height: 56,
        // backgroundColor: Platform.OS === 'ios' ? white: purple,
        backgroundColor: '#eee8d5',
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
      // title: 'Deck List',
      // headerTintColor: '#586e75',
        headerStyle: {
          backgroundColor: '#eee8d5',
        }
      // header: null,
    }
  },
  DeckIndividual: {
    screen: DeckIndividual,
    navigationOptions: {
      // headerTintColor: white,
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
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

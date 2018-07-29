import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import DeckList from './components/DeckList';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { purple, white, blue } from './utils/colors';
import DeckNew from './components/DeckNew';
import DeckIndividual from './components/DeckIndividual';

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
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white: purple,
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
      header: null,
    }
  },
  DeckIndividual: {
    screen: DeckIndividual,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
})


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
        {/*<Tabs />*/}
        {/*<DeckList/>*/}
      </View>
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

import React from 'react';
import { Text, View, StyleSheet, Button }  from 'react-native';
import { getData } from '../utils/api';

export default class DeckList extends React.Component {
  render() {
    const decks  = getData();
    return (
      <View style={styles.container}>
        {Object.keys(decks).map(deckKey => {
          const { title, questions } = decks[deckKey];
          return (
            <View key={deckKey}>
              <Text>{title}</Text>
              <Text>{questions.length}</Text>
              <Button 
                onPress={() => this.props.navigation.navigate('DeckIndividual', { deckKey })} 
                title='View Deck'>
              </Button>
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


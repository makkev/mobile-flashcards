import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getData } from '../utils/api';

export default class DeckIndividual extends React.Component {
  render() {
    const { deckKey } = this.props.navigation.state.params;
    const decks = getData();
    return (
      <View style={styles.container}>
        <Text>{decks[deckKey].title}</Text>
        <Text>{decks[deckKey].questions.length}</Text>
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
})

import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { getData } from '../utils/api';

class DeckIndividual extends React.Component {
  render() {
    const { deckKey } = this.props.navigation.state.params;
    const { decks } = this.props; 
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

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckIndividual);
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class DeckIndividual extends React.Component {
  render() {

    const { deckKey } = this.props.navigation.state.params;
    const { decks } = this.props; 
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.deckText}>{deckKey}</Text>
          <Text style={styles.deckText}>{decks[deckKey].length}</Text>
          <Text>{'\n'}</Text>
        </View>
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => this.props.navigation.navigate('AddCard', { deckKey })}
        >
          <Text style={styles.submitBtnText}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => this.props.navigation.navigate('Quiz', { deckKey })}
         >
          <Text style={styles.submitBtnText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdf6e3',
  },
  actionBtn: {
    padding: 10,
    borderRadius: 10,
    height: 50,
    margin: 5,
    width: 200,
  },
  deckText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    color: '#586e75',

  },
  submitBtn: {
    borderColor: '#268bd2',
    backgroundColor: '#268bd2',
    padding: 10,
    borderRadius: 10,
    height: 50,
    margin: 5,
    width: 200,
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
})

function mapStateToProps (state) {
  return { decks: state };
}

export default connect(mapStateToProps)(DeckIndividual);
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { getData } from '../utils/api';
import ActionButton from './ActionButton';
import { purple, white, red } from '../utils/colors';

class DeckIndividual extends React.Component {
  render() {

    const { deckKey } = this.props.navigation.state.params;
    const { decks } = this.props; 
    // console.log('****deckindividual');
    // console.log(this.props);
    // console.log(deckKey);
    return (
      <View style={styles.container}>
        <Text>{decks[deckKey].title}</Text>
        <Text>{decks[deckKey].questions.length}</Text>
        <ActionButton
          styles={styles}
          text={'Add Card'}
          color ={purple}
          onPress={() => this.props.navigation.navigate('AddCard', { deckKey })}
        >
        </ActionButton>
        <ActionButton
          styles={styles}
          text={'Start Quiz'}
          color ={red}
          onPress={() => this.props.navigation.navigate('Quiz', { deckKey })}
        >
        </ActionButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
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
  }
})

// function mapStateToProps (decks) {
//   return {
//     decks
//   }
// }
// function mapStateToProps (state) {
//   return { decks: state.decks };
// }
function mapStateToProps (decks) {
  return { decks };
}

export default connect(mapStateToProps)(DeckIndividual);
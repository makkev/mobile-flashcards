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
        <View>
          <Text style={styles.deckText}>{deckKey}</Text>
          <Text style={styles.deckText}>{decks[deckKey].length}</Text>
        </View>
        <ActionButton
          styles={styles}
          text={'Add Card'}
          color ={'#268bd2'}
          onPress={() => this.props.navigation.navigate('AddCard', { deckKey })}
        >
        </ActionButton>
        <ActionButton
          styles={styles}
          text={'Start Quiz'}
          color ={'#268bd2'}
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
    backgroundColor: '#fdf6e3',
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
  },
  deckText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    color: '#586e75',

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
function mapStateToProps (state) {
  return { decks: state };
}

export default connect(mapStateToProps)(DeckIndividual);
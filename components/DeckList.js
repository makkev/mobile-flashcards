import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, Button }  from 'react-native';
import { getData, getDecks } from '../utils/api';
import { receiveDecks } from '../actions/index';

class DeckList extends React.Component {
  componentDidMount() {
    getDecks().then(decks => this.props.receiveDecks(decks));
  }
  render() {

    // console.log(this.props);
    const { decks } = this.props;
    return (
      <View style={styles.container}>

        {decks && Object.keys(decks).map(deckKey => {
          const { title, questions } = decks[deckKey];
          return (
            <View key={deckKey}>
              <Text
                style={styles.deckTitle} 
                onPress={() => this.props.navigation.navigate('DeckIndividual', { deckKey })}
              >
                {title}
              </Text>
              <Text>{questions.length}{'\n'}</Text>
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
  },
  deckTitle: {
    fontSize: 25,
    color: 'blue',

  }
});

// function mapStateToProps (state) {
//   return { decks: state.decks };
// }
function mapStateToProps (state) {
  return { decks: state };
}

// function mapDispatchToProps (dispatch) {
//   return { receiveAllDecks: decks => dispatch(receiveDecks(decks)) }
// }
 

export default connect(mapStateToProps, { receiveDecks })(DeckList);
// export default connect()(DeckList);
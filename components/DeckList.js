import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, Button }  from 'react-native';
import { getData, getDecks } from '../utils/api';
import { receiveDecks } from '../actions/index';

class DeckList extends React.Component {
  componentDidMount() {
    getDecks().then(decks => this.props.receiveAllDecks(decks));
  }
  render() {

    const { decks } = this.props;
    return (
      <View style={styles.container}>

        {decks && Object.keys(decks).map(deckKey => {
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

function mapStateToProps (decks) {
  return decks;
}

function mapDispatchToProps (dispatch) {
  return { receiveAllDecks: decks => dispatch(receiveDecks(decks)) }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
// export default connect()(DeckList);
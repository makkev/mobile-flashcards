import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, Button, TouchableOpacity }  from 'react-native';
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions/index';

class DeckList extends React.Component {
  componentDidMount() {
    getDecks().then(decks => this.props.receiveDecks(decks));
  }
  render() {
    const { decks } = this.props;
    return (
      <View style={styles.container}>

        {decks && Object.keys(decks).map(deckKey => {
          return (
            <View key={deckKey}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DeckIndividual', { deckKey })}
              style={styles.deckContainer}>
                <Text
                  style={styles.deckTitle} 
                >
                {deckKey}
              </Text>
              <Text style={styles.deckText}>{decks[deckKey].length}{'\n'}</Text>
            </TouchableOpacity>
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
    backgroundColor: '#eee8d5',
  },
  deckTitle: {
    fontSize: 25,
    color: '#268bd2',
  },
  deckText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#586e75',
  },
  deckContainer :{
    backgroundColor: '#fdf6e3',
    borderColor: '#eee8d5',
    width: 330,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 20,
    height: 80,

  }

});

function mapStateToProps (state) {
  return { decks: state };
}

export default connect(mapStateToProps, { receiveDecks })(DeckList);
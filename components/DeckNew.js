import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, Button, TextInput }  from 'react-native';
import { deckNew }from '../actions';
import { createDeck } from '../utils/api'

class DeckNew extends React.Component {

  state = {
    title: ''
  }

  submitName = () => {
    const { title } = this.state;
    createDeck(title);
    this.props.dispatch(deckNew(title));
    this.props.navigation.navigate('DeckIndividual', { deckKey: title })
    this.setState({ text: '' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput 
          onChangeText={title => this.setState({ title })}
          style={styles.input}
          value={this.state.title}
        >
        </TextInput>
        <Button
          onPress={this.submitName}
          title='submit'
          style={styles.submitBtn}>
        </Button>
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
  input: {
    height: 50,
    width: 250,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 50,
    borderRadius: 8,
  },
  title: {
    fontSize: 25,
    color: '#333',
  },
  submitBtn: {
      borderWidth: 0.5,
      borderColor: 'black',
      padding: 10,
      borderRadius: 7,
      overflow: 'hidden',
  }

});

export default connect()(DeckNew);

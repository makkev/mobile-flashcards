import React from 'react';
import { connect } from 'react-redux';
import { deckNew }from '../actions';
import { createDeck } from '../utils/api';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
}  from 'react-native';
import DeckList from './DeckList';

class DeckNew extends React.Component {

  state = {
    title: '',
    validationError: '',
  }

  validate(title) {
    const { decks } = this.props;
    if (title == '') {
      this.setState({ validationError: 'Please enter deck title'});
      return false;
    } else if (title in decks) {
      this.setState({ validationError: 'Already exist. Choose another deck title.' });
      return false;
    } else {
      this.setState({ validationError: ''});
      return true;
    }
  }

  submitName = () => {
    const { title } = this.state;
    if (this.validate(title)) {
      this.validate(title);
      createDeck(title);
      this.props.dispatch(deckNew(title));
      this.props.navigation.navigate('DeckIndividual', { deckKey: title })
      this.setState({ title: '' });
      console.log(this.state.validationError);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
          <TextInput 
            onChangeText={title => this.setState({ title })}
            style={styles.input}
            value={this.state.title}
          >
          </TextInput>
            <Text style={{ color: '#cb4b16' }}>{this.state.validationError}</Text>
          <TouchableOpacity
            onPress={this.submitName}
            style={styles.submitBtn}>
              <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#eee8d5',
  },
  input: {
    height: 50,
    width: 250,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    color: '#586e75',
  },
  submitBtn: {
    borderColor: '#268bd2',
    backgroundColor: '#268bd2',
    padding: 10,
    borderRadius: 10,
    height: 50,
    margin: 20,
    width: 200,
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },

});

function mapStateToProps (state) {
  return { decks: state };
}

export default connect(mapStateToProps)(DeckNew);

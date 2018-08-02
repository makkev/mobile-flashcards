import React from 'react';
import { NavigationActions } from 'react-navigation';
import { addCardToDeck } from '../utils/api';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

class AddCard extends React.Component {

  state = {
    question: '',
    answer: '',
  }

  submitCard = (deckKey) => {
    const { question, answer } = this.state;
    this.props.dispatch(addCard({ question, answer, deckKey }));
    addCardToDeck(deckKey, {question, answer});
    this.setState({ question: '', answer: ''});
    this.props.navigation.dispatch(NavigationActions.back({ key: null }));

  }
  render() {
    const deckKey = this.props.navigation.state.params.deckKey;
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Question</Text>
            <TextInput
              multiline = {true}
              numberOfLines = {4}
              style={styles.input}
              onChangeText={question => this.setState({ question })}
              value={this.state.question}
            >
            </TextInput>

          <Text style={styles.title}>Answer</Text>
          <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <TextInput
              multiline = {true}
              numberOfLines = {4}
              style={styles.input}
              onChangeText={answer => this.setState({ answer })}
              value={this.state.answer}
            >
            </TextInput>
          </KeyboardAvoidingView>

          <TouchableOpacity style={styles.submitBtn} onPress={() => this.submitCard(deckKey)}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fdf6e3',
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  title: {
    fontSize: 15,
    color: '#268bd2',
  },
  input: {
    width: 350,
    height: 100,
    padding: 8,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 7,
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
export default connect(mapStateToProps)(AddCard);
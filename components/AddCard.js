import React from 'react';
import { NavigationActions } from 'react-navigation';
import { orange, white } from '../utils/colors';
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
    // correctAnswer: '',
  }

  submitCard = (deckKey) => {
    const { question, answer } = this.state;
    // console.log(deckKey);
    this.props.dispatch(addCard({ question, answer, deckKey }));
    addCardToDeck(deckKey, {question, answer});
    this.setState({ question: '', answer: ''});
    this.props.navigation.dispatch(NavigationActions.back({ key: null }));

  }
  render() {
    const deckKey = this.props.navigation.state.params.deckKey;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Question</Text>
          <TextInput
            style={styles.input}
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          >
          </TextInput>

          <Text style={styles.title}>Answer</Text>
          <TextInput
            style={styles.input}
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          >
          </TextInput>
          {/*
          <Text style={styles.title}>Correct Answer</Text>
          <TextInput
            style={styles.input}
            onChange={correctAnswer => this.setState({ correctAnswer: inCorrectAnswer })}
            value={this.state.correctAnswer}
          >
          </TextInput>
          */}

          <TouchableOpacity style={styles.submitBtn} onPress={() => this.submitCard(deckKey)}>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    color: 'black',
  },
  submitBtn: {
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 7,
    overflow: 'hidden',
  },
  input: {
    width: 250,
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
    borderRadius: 7,
  },
  

})

// function mapStateToProps (state) {
//   return { decks: state.decks };
// }
function mapStateToProps (decks) {
  return { decks };
}
export default connect(mapStateToProps)(AddCard);
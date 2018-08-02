import React from 'react';
import { connect } from 'react-redux';
import { NavigationAction} from 'react-navigation';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import {
  getDailyReminderValue,
  clearLocalNotification,
  setLocalNotification,
} from '../utils/helpers';


class Quiz extends React.Component {

  state={
    qNum: 0,
    score: 0,
    showAnswer: false,
  }

  showAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  }

  processAnswer = (correct) => {
    if (correct) this.setState({ score : this.state.score + 1})
    this.setState({ qNum: this.state.qNum + 1 });
    this.setState({ showAnswer: false });
    if (this.state.qNum >= this.props.decks[this.props.navigation.state.params.deckKey].length ) {
      clearLocalNotification()
        .then(setLocalNotification)
    }
  }

  startAgain = () => {
    this.setState({
      qNum: 0,
      score: 0,
      showAnswer: false
    });
  }


  render () {
    const decks = this.props.decks;
    const key = this.props.navigation.state.params.deckKey;
    qNum = this.state.qNum;

    return (
      <View style={styles.container}>
        {qNum < decks[key].length
          ? 
          <View>
            <Text style={{ color: '#859900', fontSize: 15 }}>Score {this.state.score}</Text>
            <Text style={{ color: '#859900', fontSize: 15 }}>{qNum + 1}/{decks[key].length}</Text>
            <Text>{'\n'}</Text>
            {this.state.showAnswer
              ? <Text style={styles.questionAnswerText}>(A) {decks[key][qNum].answer}</Text>
              : <Text style={styles.questionAnswerText}>(Q) {decks[key][qNum].question}</Text>
            }
            <Text>{'\n'}</Text>
            
            <TouchableOpacity onPress={() => this.showAnswer()}>
              {this.state.showAnswer
                ? <Text style={{ color: '#cb4b16', fontSize: 20 }}>Show Question</Text>
                : <Text style={{ color: '#cb4b16', fontSize: 20 }}>Show Answer</Text>  }
            </TouchableOpacity>
            <Text>{'\n'}</Text>

            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => this.processAnswer(true)}
            >
              <Text style={styles.submitBtnText}>Correct</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.submitBtn, { backgroundColor: '#dc322f'}]}
              onPress={() => this.processAnswer(false)}
            >
              <Text style={styles.submitBtnText}>Incorrect</Text>
            </TouchableOpacity>
          </View>
          :
          <View>
            <Text style={{ color: '#586e75', fontSize: 20 }}>{'\n\n'}Completed {key} deck</Text>
            <Text style={{ color: '#586e75', fontSize: 20 }}>{'\n'}Score: {this.state.score}/{decks[key].length}</Text>
            <Text>{'\n'}</Text>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => this.props.navigation.navigate('DeckIndividual', { deckKey: key })}
            >
              <Text style={styles.submitBtnText}>Back To Deck</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => this.startAgain()}
            >
              <Text style={styles.submitBtnText}>Restart Quiz</Text>
            </TouchableOpacity>
              </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eee8d5',
  },
  submitBtn: {
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
  questionAnswerText: {
    color: '#586e75',
    backgroundColor: '#fdf6e3',
    borderColor: '#fdf6e3',
    width: 330,
    margin: 5,
    padding: 20,
    height: 220,
  }
})

function maptStateToProps(state) {
  return { decks: state }
}

export default connect(maptStateToProps)(Quiz);


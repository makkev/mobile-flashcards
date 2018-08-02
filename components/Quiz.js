import React from 'react';
import { connect } from 'react-redux';
import { NavigationAction} from 'react-navigation';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import ActionButton from './ActionButton';


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
  }


  render () {
    // console.log(this.props);
    // console.log(this.props.navigation.state.params);
    const decks = this.props.decks;
    const key = this.props.navigation.state.params.deckKey;
    qNum = this.state.qNum;
    // console.log(this.props.navigation.state.params);

    return (
      <View style={styles.container}>
        {qNum < decks[key].length
          ? 
          <View>
            <Text>Score {this.state.score}</Text>
            <Text>{qNum + 1}/{decks[key].length}</Text>
            {this.state.showAnswer
              ? <Text>{decks[key][qNum].answer}</Text>
              : <Text>{decks[key][qNum].question}</Text>
            }
            
            <TouchableOpacity onPress={() => this.showAnswer()}>
              {this.state.showAnswer
                ? <Text>Show Question</Text>
                : <Text>Show Answer</Text>  }
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => this.processAnswer(true)}
            >
              <Text style={styles.submitBtnText}>Correct</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => this.processAnswer(false)}
            >
              <Text style={styles.submitBtnText}>Incorrect</Text>
            </TouchableOpacity>
            </View>
          :
          <View>
            <Text>Completed {key} deck</Text>
            <Text>Score: {this.state.score}/{decks[key].length}</Text>
          </View>
        }
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

function maptStateToProps(state) {
  return { decks: state }
}

export default connect(maptStateToProps)(Quiz);


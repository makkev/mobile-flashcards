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
        {qNum < decks[key].questions.length
          ? 
          <View>
            <Text>Score {this.state.score}</Text>
            <Text>{qNum + 1}/{decks[key].questions.length}</Text>
            {this.state.showAnswer
              ? <Text>{decks[key].questions[qNum].answer}</Text>
              : <Text>{decks[key].questions[qNum].question}</Text>
            }
            
            <TouchableOpacity onPress={() => this.showAnswer()}>
              {this.state.showAnswer ? <Text>Show Answer</Text> : <Text>Show Question</Text> }
            </TouchableOpacity>
            <ActionButton
              styles={styles}
              text={'Correct'}
              color ={'blue'}
              onPress={() => this.processAnswer(true)}
            >
            </ActionButton>
            <ActionButton
              styles={styles}
              text={'Incorrect'}
              color ={'red'}
              onPress={() => this.processAnswer(false)}
            >
            </ActionButton>
          </View>
          :
          <View>
            <Text>Completed {decks[key].title} deck</Text>
            <Text>Score: {this.state.score}/{decks[key].questions.length}</Text>
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
    alignItems: 'center'
  },
  actionBtn: {
    padding: 10,
    borderRadius: 10,
    height: 50,
    margin: 5,
    width: 200,
  },
})

function maptStateToProps(state) {
  return { decks: state }
}

export default connect(maptStateToProps)(Quiz);


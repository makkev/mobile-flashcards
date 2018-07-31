import React from 'react';
import { connect } from 'react-redux';
import { NavigationAction} from 'react-navigation';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import ActionButton from './ActionButton';


class Quiz extends React.Component {

  state={
    qNum: 0
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

        <Text>{decks[key].questions[qNum].question}</Text>
        <Text>{decks[key].questions[qNum].answer}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

function maptStateToProps(decks) {
  return { decks }
}

export default connect(maptStateToProps)(Quiz);


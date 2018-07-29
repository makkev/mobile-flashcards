import React from 'react';
import { Text, View, StyleSheet, Button, TextInput }  from 'react-native';

export default class DeckNew extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello New Deck</Text>
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


import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class NewDeck extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Add a new Deck!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NewDeck

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Card from './Card'

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render(){
    const { navigation } = this.props
    const { deck } = navigation.state.params

    return (
      <View style={styles.container}>
        <Card question={deck.questions[0].question} answer={deck.questions[0].answer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.05)'
  }
})


export default Quiz;

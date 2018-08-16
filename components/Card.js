import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Button from './Button'

const QUESTION = 'QUESTION'
const ANSWER = 'ANSWER'

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: QUESTION
    }
    this.flipCard = this.flipCard.bind(this)
  }

  flipCard(){
    if (this.state.view === QUESTION) this.setState({ view : ANSWER })
    if (this.state.view === ANSWER) this.setState({ view: QUESTION })
  }

  render(){
    const { question, answer } = this.props
    const { view } = this.state

    return (
      <TouchableWithoutFeedback onPress={() => this.flipCard()}>
        <View style={styles.container}>
          {view === QUESTION?
            <Text>{question}</Text>
            :
            <Text>{answer}</Text>
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 4,
    backgroundColor: '#fff',
    elevation: 4
  }
})

export default Card;

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { pluralize } from '../utils/helpers'
import Button from './Button'

class Deck extends Component {

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params


    return {
      title: deck.title
    }
  }

  render(){
    let { navigation } = this.props
    let { deck } = navigation.state.params

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.cardCount}>{deck.questions.length} cards</Text>
        <Button onPress={() => navigation.navigate('NewCard', { deckId : deck.key })}>Add Card</Button>
        <Button onPress={() => alert('Time for a quiz!')}>Start Quiz</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40
  },
  cardCount: {
    fontSize: 20,
    color: 'rgba(0,0,0,.55)'
  }
})

export default Deck

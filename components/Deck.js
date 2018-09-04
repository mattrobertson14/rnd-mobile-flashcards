import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { pluralize } from '../utils/helpers'
import Button from './Button'
import { connect } from 'react-redux'

class Deck extends Component {

  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params


    return {
      title: deckId
    }
  }

  render(){
    let { deck, navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.cardCount}>{deck.questions.length} {pluralize('card', deck.questions.length)}</Text>
        <Button onPress={() => navigation.navigate('NewCard', { deckId : deck.title })}>Add Card</Button>
        <Button onPress={() => navigation.navigate('Quiz', { deckId : deck.title })}>Start Quiz</Button>
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

const mapDispatchToProps = null

const mapStateToProps = (state, ownProps) => {
  let deckId = ownProps.navigation.state.params.deckId
  return {
    deck : state.decks[deckId]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);

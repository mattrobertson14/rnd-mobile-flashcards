import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Card from './Card'
import Button from './Button'

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: 0,
      numCorrect: 0,
      quizDone: false,
      deck: this.props.navigation.state.params.deck,
      newCard: true
    }

    this.handleCorrect = this.handleCorrect.bind(this)
    this.handleWrong = this.handleWrong.bind(this)
  }

  handleCorrect() {
    let {currentCard, numCorrect, deck} = this.state
    if (currentCard === deck.questions.length-1) {
      this.setState({ quizDone: true, numCorrect: numCorrect+1 })
    } else {
      this.setState({ currentCard: currentCard+1, numCorrect: numCorrect+1})
    }
  }

  handleWrong() {
    let {currentCard, deck} = this.state
    if (currentCard === deck.questions.length-1) {
      this.setState({ quizDone: true })
    } else {
      this.setState({ currentCard: currentCard+1 })
    }
  }

  render(){
    const { currentCard, deck, numCorrect, quizDone } = this.state
    const { navigation } = this.props

    if (!quizDone){
      const currentQuestion = deck.questions[currentCard]

      return(
        <View style={styles.quizContainer}>
          <Text style={styles.cardCount}>Card: {currentCard+1}/{deck.questions.length}</Text>
          <Card
            question={currentQuestion.question}
            answer={currentQuestion.answer}
            index={currentCard+1}
          />
          <View style={ styles.buttonContainer }>
            <Button style={[styles.button, { backgroundColor: 'green', borderColor: 'green' }] } onPress={() => this.handleCorrect()}>CORRECT</Button>
            <Button style={[styles.button, { backgroundColor: 'red', borderColor: 'red' }] } onPress={() => this.handleWrong()}>INCORRECT</Button>
          </View>
        </View>
      )
    }

    return (
      <View style={styles.resultContainer}>
        <Text style={{ fontSize: 20 }}>Quiz Done! You scored a</Text>
        <Text style={{ fontSize: 90, marginBottom: 30,marginTop: 30, fontWeight: 'bold'}}>{Math.ceil(numCorrect/deck.questions.length*100)}%</Text>
        <Text style={{ fontSize: 16 }}>{numCorrect} out of {deck.questions.length} questions answered correctly</Text>
        <Button onPress={() => this.setState({ quizDone: false, currentCard: 0, numCorrect: 0})}>RETAKE QUIZ</Button>
        <Button onPress={() => navigation.goBack()}>BACK TO DECK</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.05)'
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.05)',
    padding: 40
  },
  cardCount: {
    fontSize: 16,
    marginTop: 12,
    marginLeft: 20,
    alignSelf: 'stretch',
    textAlign: 'left'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    flex: 1,
    paddingRight: 0,
    paddingLeft: 0,
    borderRadius: 0,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
})


export default Quiz;

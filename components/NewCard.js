import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Platform } from 'react-native'
import Button from './Button'
import { connect } from 'react-redux'
import { addQuestion as addQuestionAction } from '../actions'
import { addQuestion as addQuestionAPI } from '../utils/api'

class NewCard extends Component {
  constructor(props){
    super(props)

    this.state = {
      question: '',
      answer: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillUnmount(){
    this.setState({question: '', answer: ''})
  }

  handleClick(){
    if (!this.state.question.trim() || !this.state.answer.trim())
      return alert('Question AND Answer Must Be Filled Out')

    let question = { question: this.state.question, answer: this.state.answer}

    let deckTitle = this.props.navigation.state.params.deckId

    addQuestionAPI(question, deckTitle).then(res => {
      this.props.addQuestion(deckTitle, question)
      this.props.navigation.goBack(this.props.navigation.state.params.go_back_key)
    }).catch( err => {
      console.log(err)
      alert('The Question Wasn\'t able to be added')
    })
  }

  render(){
    let { question, answer } = this.state

    return(
      <View style={styles.container}>
        <Text>Question:</Text>
        <TextInput
          style={Platform.OS === 'ios'? [styles.input, styles.inputIOS] : styles.input}
          onChangeText={(txt) => this.setState({ question : txt })}
          value={question}
          onFocus={() => this.setState({ questionFocus : true })}
        />
        <Text style={{marginTop: 30}}>Answer:</Text>
        <TextInput
          style={Platform.OS === 'ios'? [styles.input, styles.inputIOS] : styles.input}
          onChangeText={(txt) => this.setState({ answer : txt })}
          value={answer}
          onFocus={() => this.setState({ answerFocus : true })}
        />
        <Button style={{alignSelf: 'center'}} onPress={() => this.handleClick()}>ADD</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 50,
    paddingLeft: 25,
    paddingRight: 25
  },
  input: {
    alignSelf: 'stretch',
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputIOS: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.6)',
  },
  label: {
    flex: 1,
    textAlign: 'left'
  }
})

const mapDispatchToProps = dispatch => ({
  addQuestion: (deckTitle, question) => dispatch(addQuestionAction(deckTitle, question))
});

const mapStateToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);

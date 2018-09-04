import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Platform } from 'react-native'
import Button from './Button'

class NewCard extends Component {
  constructor(props){
    super(props)

    this.state = {
      question: '',
      answer: ''
    }
  }

  componentWillUnmount(){
    this.setState({question: '', answer: ''})
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
        <Button style={{alignSelf: 'center'}} onPress={() => alert('will add card')}>ADD</Button>
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

export default NewCard

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './List';
import { AppLoading } from 'expo'

const fakeDB = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  JavaScript2: {
    title: 'JavaScript2',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  JavaScript3: {
    title: 'JavaScript3',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  JavaScript4: {
    title: 'JavaScript4',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  JavaScript5: {
    title: 'JavaScript5',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
}

class DeckList extends Component {
  constructor(props){
    super(props)

    this.state = {
      decks : {},
      loading: true
    }
  }

  componentDidMount(){
    this.setState({decks : fakeDB, loading: false})
  }

  render() {
    let { decks, loading } = this.state

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Current Decks</Text>
        </View>
        {!loading?
          <List items={decks} navigation={this.props.navigation} />
        :
          <AppLoading />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 25
  }
});

export default DeckList

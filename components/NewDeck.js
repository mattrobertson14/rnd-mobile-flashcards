import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, TextInput } from 'react-native';
import Button from './Button'
import { connect } from 'react-redux'
import { addDeck as addDeckAction } from '../actions'
import { addDeck as addDeckAPI } from '../utils/api'

class NewDeck extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let deck = {
      title: this.state.title,
      questions: []
    }

    if (this.props.decks[this.state.title])
      return alert('Deck Name Already Exists')
    if (!this.state.title.trim())
      return alert('Title Cannot Be Empty')

    addDeckAPI(deck).then(res => {
      let data = JSON.parse(res)
      let title = this.state.title
      this.props.addDeck(deck)
      this.setState({ title : '' })
      this.props.navigation.navigate('Deck',{deckId: title})
    })
  }

  render() {
    let { title } = this.state

    return (
      <View style={styles.container}>
        <Text>Deck Title:</Text>
        <TextInput
          style={Platform.OS === 'ios'? [styles.input, styles.inputIOS] : styles.input}
          onChangeText={(txt) => this.setState({ title : txt })}
          value={title}
          onFocus={() => this.setState({ questionFocus : true })}
        />
        <Button style={{alignSelf: 'center'}} onPress={() => this.handleClick()}>ADD</Button>
      </View>
    );
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
});

const mapDispatchToProps = dispatch => ({
  addDeck : (deck) => dispatch(addDeckAction(deck))
});

const mapStateToProps = state => ({
  decks : state.decks
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);

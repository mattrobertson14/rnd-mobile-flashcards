import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, TextInput } from 'react-native';
import Button from './Button'

class NewDeck extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: ''
    }
  }

  render() {
    let { title } = this.state

    return (
      <View style={styles.container}>
        <Text>Deck Title:</Text>
        <TextInput
          style={Platform.OS === 'ios'? [styles.input, styles.inputIOS] : styles.input}
          onChangeText={(txt) => this.setState({ question : txt })}
          value={title}
          onFocus={() => this.setState({ questionFocus : true })}
        />
        <Button style={{alignSelf: 'center'}} onPress={() => alert('will add deck')}>ADD</Button>
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

export default NewDeck

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'

class NewCard extends Component {

  render(){
    return(
      <View style={styles.container}>
        <Text>New Card!</Text>
        <Button onPress={() => alert('Submit!')}>SUBMIT</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default NewCard

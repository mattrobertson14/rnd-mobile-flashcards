import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ children, onPress, style = {} }) => {

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{ children }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: 200,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 4,
    borderColor: '#00437E',
    borderWidth: 1,
    backgroundColor: '#00437E',
    marginTop: 40
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 2
  }
})

export default Button

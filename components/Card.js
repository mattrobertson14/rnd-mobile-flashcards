import React, { Component } from 'react';
import { Animated, View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Button from './Button'

const QUESTION = 'QUESTION'
const ANSWER = 'ANSWER'

class Card extends Component {
  constructor(props) {
    super(props);

    this.animatedVal = new Animated.Value(0)
    this.val = 0
    this.animatedVal.addListener(({ value }) => {
      this.value = value
    })
    this.flipCard = this.flipCard.bind(this)

    this.state = {
      flipView: ANSWER
    }
  }

  flipCard(){
    if (this.value >= 90){
      Animated.spring(this.animatedVal, {
        toValue: 0,
        tension: 8,
        friction: 6
      }).start()
      this.setState({ flipView: ANSWER })
    } else {
      Animated.spring(this.animatedVal, {
        toValue: 180,
        tension: 8,
        friction: 6
      }).start()
      this.setState({ flipView: QUESTION })
    }
  }

  render(){
    const { question, answer } = this.props
    const { flipView } = this.state

    const frontAnimate = {
      transform: [
        { rotateY: this.animatedVal.interpolate({
          inputRange: [0,180],
          outputRange: ['0deg', '180deg']
        })}
      ],
      opacity: this.animatedVal.interpolate({
        inputRange: [89,90],
        outputRange: [1, 0]
      })
    }

    const backAnimate = {
      transform: [
        { rotateY: this.animatedVal.interpolate({
          inputRange: [0,180],
          outputRange: ['180deg', '0deg']
        })}
      ],
      opacity: this.animatedVal.interpolate({
        inputRange: [89,90],
        outputRange: [0, 1]
      })
    }

    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.card, frontAnimate]}>
            <View>
              <Text>{question}</Text>
            </View>
          </Animated.View>
          <Animated.View style={[styles.card, styles.back, backAnimate]}>
            <View>
              <Text>{answer}</Text>
            </View>
          </Animated.View>
        </View>
        <Button onPress={() => this.flipCard()}>FLIP FOR {flipView}</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 325,
    width: 324,
    padding: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 4,
    backfaceVisibility: 'hidden',
    borderRadius: 4
  },
  back: {
    position: 'absolute',
    top: 0,
  }
})

export default Card;

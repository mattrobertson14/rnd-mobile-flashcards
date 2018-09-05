import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import List from './List';
import Button from './Button';
import { AppLoading } from 'expo'
import { connect } from 'react-redux'
import { receiveDecks as receiveDecksAction } from '../actions'
import { getDecks } from '../utils/api'

class DeckList extends Component {
  constructor(props){
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    getDecks().then(res => {
      let data = JSON.parse(res)
      this.props.receiveDecks(data)
      this.setState({ loading : false })
    })
  }

  render() {
    let { loading } = this.state
    let {decks} = this.props
    let decksArr = Object.values(decks)

    return (
      <View style={styles.container}>
        <Text
          style={styles.title}
        >
          {decksArr.length > 0? 'Current Decks' : 'You Have No Decks'}
          {decksArr.length === 0 && <Button onClick={()=>this.props.navigation.navigate('NewDeck')}>Add First Deck</Button>}
        </Text>
        {!loading?
          <List items={decksArr} navigation={this.props.navigation} />
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
    backgroundColor: '#fff',
    shadowColor: 'transparent',
    shadowRadius: 0,
    paddingTop: 25
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 25,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10
  },
});

const mapDispatchToProps = dispatch => ({
  receiveDecks : (decks) => dispatch(receiveDecksAction(decks))
});

const mapStateToProps = state => ({
  decks : state.decks
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);

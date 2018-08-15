import React, { Component } from 'react'
import { View, Text, Platform, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { pluralize } from '../utils/helpers'

class List extends Component {
  constructor(props){
    super(props)
    this.navigate = this.navigate.bind(this)
  }

  getChildStyle(index, end){
    if (index === 0) return [styles.listItem, styles.firstListItem]
    if (index < end) return styles.listItem
    return [styles.listItem, styles.lastlistItem]
  }

  navigate(item){
    this.props.navigation.navigate('Deck', { deck : item })
  }

  render(){
    let { items } = this.props
    let data = []
    Object.keys(items).forEach( item => { data.push({ key: item, ...items[item] }) })

    return (

      <FlatList
        style={styles.container}
        data={data}
        renderItem={({item, separators}) => (
          <TouchableOpacity style={styles.listItem} onPress={() => this.navigate(item) } >
            <View style={styles.listItemInternal}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.cardCount}>{item.questions.length} {pluralize('card', item.questions.length)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    marginTop: 30,
    backgroundColor: '#fff'
  },
  listItem: {
    paddingTop: 25,
    paddingBottom: 25,
    borderColor: '#000',
    borderBottomWidth: .5,
    borderTopWidth: .5,
  },
  listItemInternal: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemTitle : {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  cardCount: {
    color: 'rgba(0,0,0,.55)'
  }
})

export default List

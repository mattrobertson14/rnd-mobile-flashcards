import React from 'react';
import { Text, View, Platform, StatusBar } from 'react-native';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { Constants } from 'expo'

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import NewCard from './components/NewCard'

const MyStatusBar = () => {
  if (Platform.OS === 'ios'){
    return (
      <View style={{ backgroundColor: '#fff', height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor={'#fff'}  barStyle='dark-content' />
      </View>
    )
  }
  return (
    <View style={{ backgroundColor: '#00437E', height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={'#00437E'}  barStyle='light-content' />
    </View>
  )
}

const routeConfig = {
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: () => <FontAwesome name='list' size={30} color='#006CCB' />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: () => <FontAwesome name='plus-square' size={30} color='#006CCB' />
    },
  }
}

const navConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#00437E' : '#fff',
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? '#fff' : '#0087FF',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}

const Tabs = Platform.OS === 'ios'? createBottomTabNavigator(routeConfig, navConfig) : createMaterialTopTabNavigator(routeConfig, navConfig)

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0087FF',
      }
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: 'New Card',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0087FF'
      }
    }
  }
})

class App extends React.Component {

  render() {
    return (
      <View style={{flex : 1 }}>
        <MyStatusBar />
        <MainNavigator />
      </View>
    );
  }
}

export default App

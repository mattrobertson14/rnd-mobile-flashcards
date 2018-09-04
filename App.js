import React from 'react';
import { Text, View, Platform, StatusBar } from 'react-native';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import reducer from './reducers'

const MyStatusBar = () => {
  if (Platform.OS === 'ios'){
    return (
      <View style={{ backgroundColor: '#00437E', height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor={'#fff'}  barStyle='light-content' />
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
      tabBarIcon: () => <FontAwesome name='list' size={30} color='#00437E' />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: () => <FontAwesome name='plus-square' size={30} color='#00437E' />
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
      backgroundColor: Platform.OS === 'ios' ? '#fff' : '#0064BD',
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
        backgroundColor: '#00437E',
      }
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: 'New Card',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#00437E'
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#00437E'
      }
    }
  }
})

class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex : 1}}>
          <MyStatusBar />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

export default App

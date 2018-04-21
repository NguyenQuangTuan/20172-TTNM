import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import DangNhap from './screens/DangNhap'
import Home from './screens/Home'
import Tree from './map/tree'

export default class App extends Component {

  render() {
    return (
      <RootStack />
      // <Tree/>
    )
  }

}

const RootStack = StackNavigator(
  {
    DangNhap: {
      screen: DangNhap
    },
    Home: {
      screen: Home
    },
  },
  {
    initialRouteName: 'DangNhap',
  }
);
// AppRegistry.registerComponent('ttnm-test (2)', ()=> App)

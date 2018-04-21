import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry
} from 'react-native'
import { StackNavigator, SwitchNavigator, DrawerNavigator } from 'react-navigation';
import DangNhapScreen from './screens/DangNhap'
import HomeScreen from './screens/Home'
import ThongBaoScreen from './screens/ThongBao'
import LichLamViecScreen from './screens/LichLamViec'
import DangXuatScreen from './screens/DangXuat'
import LichSuScreen from './screens/LichSu'
import HDSDPMScreen from './screens/HDSDPM'
import TimDuongLayNuocScreen from './screens/TimDuongLayNuoc'



const HomeStack = DrawerNavigator({
  Home: HomeScreen,
  ThongBao: ThongBaoScreen, 
  LichLamViec: LichLamViecScreen, 
  LichSu: LichSuScreen, 
  HDSDPM: HDSDPMScreen,
  TimDuongLayNuoc: TimDuongLayNuocScreen,
  DangXuat: DangXuatScreen
});
const DangNhapStack = StackNavigator({ DangNhap: DangNhapScreen });

export default SwitchNavigator(
  {

    Home: HomeStack,
    DangNhap: DangNhapStack,
  },
  {
    initialRouteName: 'DangNhap',
  }
)
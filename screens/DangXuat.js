import React, { Component } from 'react'

import { StackNavigator } from 'react-navigation';

export default class DangXuat extends Component{

    static navigationOptions = {
        title: 'Đăng xuất',
    };

    render(){
        return(
            () => this.props.navigation.navigate('DangNhap')
        )
    }


}

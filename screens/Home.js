import React, { Component } from 'react'
import {
    Text,
    View,
    // Button,
    Image,
    StatusBar,
    TouchableHighlight,
    ImageBackground
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import styles from '../styles/style'
import Tree from '../map/tree'
import BlueTree from '../map/blueTree'

export default class Home extends Component {
    constructor(props) {
        super(props)
        banDo = require('../img/BanDo.png')

        this.state = {
            cay: true, // hien thi cay song
            xemCay: 'Xem tất cả cây'
        }
    }

    static navigationOptions = {
        title: 'Trang chính',
      };

    hienThiCay() {
        let cay = this.state.cay
        if (cay == true) {
            return (    
                <Tree />
            )
        } else {
            return (
                <View>
                    <Tree />
                    <BlueTree />
                </View>
            )
        }
    }

    buttonXemCay() {
        // alert(1)
        let cay = this.state.cay
        if (cay == true) {
            this.setState({ xemCay: 'Xem cây cần tưới', cay: false })
        } else {
            this.setState({xemCay: 'Xem tất cả cây', cay: true})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={banDo} style={styles.imageBackground}>
                    {this.hienThiCay()}

                    <TouchableHighlight style={styles.buttonXemCay} onPress={this.buttonXemCay.bind(this)}>
                        <Text style={styles.textButtonXemCay}>{this.state.xemCay}</Text>
                    </TouchableHighlight>

                </ImageBackground>
            </View>
        )
    }
}



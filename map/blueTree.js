import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native'


export default class BlueTree extends Component {
    constructor(props) {
        super(props)
        tree = require('../icon/CaySong.png')

    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={tree} style={styles.tree1}></Image>
                <Image source={tree} style={styles.tree2}></Image>
                <Image source={tree} style={styles.tree3}></Image>
                <Image source={tree} style={styles.tree4}></Image>
                <Image source={tree} style={styles.tree5}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tree1: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
        marginTop: 50,
        marginLeft: 30
    },
    tree2: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
        marginTop: 0,
        marginLeft: 100
    },
    tree3: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
        marginTop: 20,
        marginLeft: 50
    },
    tree4: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
        marginTop: 10,
        marginLeft: 30
    },
    tree5: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
        marginTop: 5,
        marginLeft: 200
    }
})
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'


export default class Tree extends Component {
    constructor(props) {
        super(props)
        tree = require('../icon/CayChet.png')

    }

    onPress() {
        Alert.alert(
            'Tình trạng cây',
            'Cây thiếu 2 lít nước',
            [
                { text: 'Quay lại' },
                { text: 'Tưới cây' },
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <Image source={tree} style={styles.tree1}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <Image source={tree} style={styles.tree2}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <Image source={tree} style={styles.tree3}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <Image source={tree} style={styles.tree4}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <Image source={tree} style={styles.tree5}></Image>
                </TouchableOpacity>
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
import React, { Component } from 'react'
import {
    Text,
    View,
    // Button,
    Image,
    StatusBar,
    TouchableHighlight,
    ImageBackground,
    ListView,
    TouchableOpacity
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import styles from '../styles/style';


export default class LichLamViec extends Component {
    constructor(proqs) {
        super(proqs)
        
        data = [
            {
                image: 'https://goo.gl/xrrHH9',
                title: 'CÔNG VIỆC 1',
                content: 'Nội dung công việc thứ 1'
            },
            {
                image: 'https://goo.gl/xrrHH9',
                title: 'CÔNG VIỆC 2',
                content: 'Nội dung công việc thứ 2'
            },
            {
                image: 'https://goo.gl/xrrHH9',
                title: 'CÔNG VIỆC 3',
                content: 'Nội dung công việc thứ 3'
            },
        ]
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
            dataSource: ds.cloneWithRows(data)
        }

    }

    static navigationOptions = {
        title: 'Lịch làm việc',
    };

    renderlist(dataSource) {
        return (
            <View style={styles.containerListTB}>
                <Image source={{ uri: dataSource.image }} style={styles.imageTB} />
                <View style={styles.waperContainerTB}>
                    <Text style={styles.titleTB}>{dataSource.title}</Text>
                    <Text style={styles.contentTB}>{dataSource.content}</Text>
                </View>
            </View>
        )
    }

    renderListView() {
        return (
            <ListView dataSource={this.state.dataSource} renderRow={this.renderlist.bind(this)} />
        )
    }
    renderViewHeader() {
        return (
            <View style={styles.viewHeader}>
                <View style = {styles.imageLeft}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image style={styles.imageLeft} source={require('../icon/back.png')} />
                </TouchableOpacity>
                </View>
                <View style = {styles.textRight}>
                    <Text style = {styles.textRight}>LỊCH LÀM VIỆC 2/5/2018</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                {this.renderViewHeader()}
                {this.renderListView()}
            </View>
        )
    }
}
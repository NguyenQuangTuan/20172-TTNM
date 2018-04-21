import React, { Component } from 'react'
import {
    Text,
    View,
    // Button,
    Image,
    StatusBar,
    TouchableHighlight,
    ImageBackground,
    Picker,
    TouchableOpacity
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import styles from '../styles/style'
import Tree from '../map/tree'
import BlueTree from '../map/blueTree'
import { List } from 'react-native-elements';

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
            this.setState({ xemCay: 'Xem tất cả cây', cay: true })
        }
    }

    buttonLayNuoc() {
        alert(1)
    }
    renderViewHeader() {
        return (
            <View style={styles.viewHeader}>
                <View style={styles.imageLeft}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                        <Image style={styles.imageLeft} source={require('../icon/menu.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.textRight}>
                    <Text style={styles.textRight}>TRANG CHÍNH</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderViewHeader()}
                <StatusBar hidden={true} />
                <ImageBackground source={banDo} style={styles.imageBackground}>
                    <View style={styles.waperTree}>
                        {this.hienThiCay()}
                    </View>

                    <View style={styles.waperButton}>
                        <TouchableHighlight style={styles.buttonXemCay} onPress={this.buttonXemCay.bind(this)}>
                            <Text style={styles.textButtonXemCay}>{this.state.xemCay}</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.waperButton}>
                        <TouchableHighlight style={styles.buttonLayNuoc} onPress={this.buttonLayNuoc.bind(this)}>
                            <Text style={styles.textButtonXemCay}>Đi lấy nước</Text>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

// class ListOption extends React.Component {
//     render() {
//       return (
//         <Image
//           source={require('./spiro.png')}
//           style={{ width: 30, height: 30 }}
//         />
//       );
//     }
//   }

//   class renderPicker extends Component{
//       render(){
//         return(
//             <Picker onValueChange={(value) => this.setState({selected: value})} selectedValue = {this.state.selected}>
//                 <Picker.Item lable={'Lịch làm việc'} value={'llv'}/>
//                 <Picker.Item lable={'Tìm đường tưới cây'} value={'tdtc'}/>
//                 <Picker.Item lable={'Thông báo'} value={'tb'}/>
//                 <Picker.Item lable={'Lịch sử làm việc'} value={'lslv'}/>
//                 <Picker.Item lable={'Hướng dẫn sử dụng phần mềm'} value={'hdsdpm'}/>
//                 <Picker.Item lable={'Trợ giúp'} value={'tg'}/>
//                 <Picker.Item lable={'Đăng xuất'} value={'dx'}/>
//             </Picker>
//         )
//       }

// }
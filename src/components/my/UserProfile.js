import React, {Component} from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native'
import NavBar from '../common/NavBar'
import Item from '../common/Item';
import Profile from './Profile';
import Modal from 'react-native-modal';

//FontAwesome
export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '123木頭人',
            modalVisible: false
        }
    }

    back() {
        this.props.navigation.goBack();
    }

    open(){
        this.setState({modalVisible: !this.state.modalVisible});
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
                <NavBar
                    title="账户信息"
                    leftIcon="ios-arrow-back"
                    leftPress={this.back.bind(this)}
                />
                <ScrollView>
                    <Item name="头像" avatar={2} first={true} onPress={this.open.bind(this)}/>
                    <Item name="用户名" disable={true} subName={this.state.username}/>
                    <Text style={styles.title}>{"账号绑定"}</Text>
                    <Item name="手机" font="FontAwesome" icon="mobile" subName="135****0418"/>
                    <Item name="微信" color="#1bce4a" iconSize={15} font="FontAwesome" icon="wechat" subName="已绑定"/>
                    <Item name="QQ" color="#ce3c1b" iconSize={15} font="FontAwesome" icon="qq" subName="未绑定"/>
                    <Item name="微博" color="#fa7d3c" iconSize={16} font="FontAwesome" icon="weibo" subName="未绑定"/>
                    <Text style={styles.title}>{"安全设置"}</Text>
                    <Item name="登录密码" subName="未绑定"/>
                    <Item name="支付密码" subName="未绑定"/>
                    <Item name="小额免密支付"/>
                </ScrollView>
                <Modal isVisible={this.state.modalVisible}
                       animationIn={'fadeIn'}
                       animationOut={'fadeOut'}
                       useNativeDriver={true}
                       onBackdropPress={() => this.setState({modalVisible: false})}
                       onBackButtonPress={() => this.setState({modalVisible: false})}>
                    <Profile></Profile>
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        color: "#666"
    }
})

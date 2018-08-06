import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native'
import px2dp from '../../util'
import NavBar from '../common/NavBar'
import Button from '../common/Button'
import Icon from 'react-native-vector-icons/Ionicons'
//FontAwesome
export default class Address extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            address: [
                {
                    name: "Test",
                    phone: "135****0418",
                    tag: 0,
                    tagValue: '公司',
                    color: "#0096ff",
                    address: "书城路"
                },
                {
                    name: "Test2",
                    phone: "135****0418",
                    tag: 1,
                    tagValue: '家',
                    color: "#ff6000",
                    address: "文治街"
                }
            ]
        }
    }

    add() {
        this.props.navigation.navigate('EditAddress', {
                pageType: 0,
                title: "新增地址"
        })
    }

    edit(data) {
        this.props.navigation.navigate('EditAddress', {
            pageType: 1,
            title: "修改地址",
            data: data
        })
    }

    back() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
                <NavBar
                    title="收货地址"
                    leftIcon="ios-arrow-back"
                    leftPress={this.back.bind(this)}
                />
                <ScrollView>
                    {this.state.address.map((item, i) => {
                        return (
                            <Button key={i} onPress={this.edit.bind(this, item)}>
                                <View style={styles.address}>
                                    <View>
                                        <Text style={{
                                            color: "#333",
                                            fontSize: px2dp(14)
                                        }}>{item.name + " " + item.phone}</Text>
                                        <View style={styles.ads1List}>
                                            <Text
                                                style={[styles.tag, {backgroundColor: item.color || "#0096ff",}]}>{item.tagValue}</Text>
                                            <Text style={{color: "#bbb", fontSize: px2dp(13)}}>{item.address}</Text>
                                        </View>
                                    </View>
                                    <Icon name="md-create" size={22} color="#ccc"/>
                                </View>
                            </Button>
                        )
                    })}
                </ScrollView>
                <Button style={{position: "absolute", bottom: 0, left: 0, right: 0, flex: 1}}
                        onPress={this.add.bind(this)}>
                    <View style={{
                        height: px2dp(45),
                        flexDirection: "row",
                        backgroundColor: "#fff",
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Icon name="ios-add-circle-outline" size={18} color="#0096ff"/>
                        <Text style={{color: "#0096ff", fontSize: px2dp(14), marginLeft: 8}}>{"新增地址"}</Text>
                    </View>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    address: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#fbfbfb",
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        paddingVertical: 8
    },
    tag: {
        color: "#fff",
        fontSize: px2dp(12),
        minWidth: px2dp(30),
        textAlign: "center",
        paddingVertical: 1,
        paddingHorizontal: 2,
        borderRadius: 5,
        marginRight: 5
    },
    ads1List: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 5
    }
})

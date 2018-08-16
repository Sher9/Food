/**
 * Created by xh on 2018/7/20.
 */
import React, {Component} from 'react';
import {
    Text,
    TextInput,
    View,
    Modal,
    Platform,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import px2dp from '../../util'
const InputHeight = px2dp(28);


type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props)
    }

    closeModal() {
        this.props.closeModal();
    }

    render() {
        return <Modal
            style={styles.wrap}
            animationType={'slide'}
            onRequestClose={() => {
            }}
            visible={this.props.searchView}
        >
            <View style={styles.searchView}>
                <TouchableOpacity style={{marginLeft: 20}}  onPress={this.closeModal.bind(this)}>
                    <Icon name="ios-arrow-back" size={px2dp(28)} color="#666"/>
                </TouchableOpacity>
                <TextInput style={styles.textInput} underlineColorAndroid="transparent"/>
                <Text style={styles.text}>搜索</Text>
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.head}>
                    <Text style={{fontSize: px2dp(18), color: "#333"}}>{"历史搜索"}</Text>
                    <TouchableOpacity>
                        <Icon name={"ios-trash"} size={px2dp(16)} color="#333"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.queryList}>
                    {["小恒水饺", "贡茶", "麻辣小龙虾", "油焖大虾", "龙虾", "黄焖鸡"].map((item, i) => {
                        return (
                            <View key={i} style={{marginRight: 12, marginBottom: 12}}>
                                <TouchableOpacity>
                                    <Text style={styles.queryItem}>{item}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
                <View style={styles.head}>
                    <Text style={{fontSize: px2dp(18), color: "#333"}}>{"热门搜索"}</Text>
                </View>
                <View style={styles.queryList}>
                    {["贡茶", "大排档", "第一大排档", "果麦", "星巴克", "周黑鸭"].map((item, i) => {
                        return (
                            <View key={i} style={{marginRight: 12, marginBottom: 12}}>
                                <TouchableOpacity>
                                    <Text style={styles.queryItem}>{item}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
    </Modal>
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    head: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    queryList: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    queryItem: {
        flex: 1,
        fontSize: px2dp(13),
        color: "#666",
        backgroundColor: "#F7F7F7",
        paddingHorizontal: 3,
        paddingVertical: 3,
    },
    searchView: {
        marginTop: 10,
        flexDirection: "row"
    },
    textInput: {
        width: 250,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 13,
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 0,
        height: px2dp(30),
        backgroundColor: "#F7F7F7"
    },
    text: {
        fontSize: 18,
        height: px2dp(30)
    },
})
/**
 * Created by xh on 2018/7/20.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Animated,
    Platform,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import px2dp from '../../util'


type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props)
    }
    render() {
        let {show} = this.props;
        return (
            <Animated.View style={[styles.wrap, {
                opacity: show
            }]}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.head}>
                        <Text style={{fontSize: px2dp(13), color: "#333"}}>{"历史搜索"}</Text>
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
                        <Text style={{fontSize: px2dp(13), color: "#333"}}>{"热门搜索"}</Text>
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

            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: (Platform.OS === 'ios') ? 64 : 42,
        backgroundColor: "#eee"
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
        paddingVertical: 24,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    queryItem: {
        flex: 1,
        fontSize: px2dp(13),
        color: "#666",
        borderWidth: 1,
        borderColor: "#bbb",
        paddingHorizontal: 3,
        paddingVertical: 3,
        borderRadius: 4
    },
    scrollView: {}
})
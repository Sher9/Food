/**
 * Created by xh on 2018/7/11.
 */
import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import NavBar from '../common/NavBar'
import WebView from './WebView'

export default class Discover extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
                <NavBar title="发现"/>
                <WebView
                    source={{uri: 'https://www.baidu.com'}}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    webview_style: {
        flex: 1
    }
})

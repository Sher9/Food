import React, {Component} from 'react'
import {View, Platform, NativeModules,StatusBar} from 'react-native'
import Navigation from './config/Navigation'

export default class rootApp extends Component {
    componentDidMount() {
        NativeModules.SplashScreen.hide();
    }
    render() {
        return (
            <View style={{backgroundColor: Platform.OS == "ios" ? "#000" : "#0398ff", flex: 1}}>
                <StatusBar
                    backgroundColor="#0398ff"
                    barStyle="light-content"
                />
                <Navigation/>
            </View>
        )
    }
}


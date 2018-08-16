/**
 * Created by xh on 2018/7/13.
 */
import React, {Component} from "react";
import {StackNavigator, TabNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from "../components/home/Home";
import OrderScreen from "../components/order/Order";
import DiscoverScreen from "../components/discover/Discover";
import MineScreen from "../components/my/My";
import DetailScreen from '../components/detail/Detail';
import Address from '../components/my/Address';
import EditAddress from '../components/my/EditAddress';
import Setting from '../components/my/Setting';
import UserProfile from '../components/my/UserProfile';
export default class MainComponent extends Component {
    render() {
        return (
            <Navigator/>
        );
    }
}

const IndexTabNavigator = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: '外卖',
            tabBarIcon: ({tintColor}) => (<Icon name="logo-google" size={16} color={tintColor}/>)
        },
    },
    NearBy: {
        screen: DiscoverScreen,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: ({tintColor}) => (<Icon name="ios-compass-outline" size={16} color={tintColor}/>)

        },
    },
    Order: {
        screen: OrderScreen,
        navigationOptions: {
            tabBarLabel: '订单',
            tabBarIcon: ({tintColor}) => (<Icon name="ios-list-box-outline" size={16} color={tintColor}/>)
        },
    },
    Mine: {
        screen: MineScreen,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (<Icon name="ios-contact-outline" size={16} color={tintColor}/>)
        },
    }
}, {
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
        activeTintColor: '#4484F6',
        inactiveTintColor: '#555',
        style: {
            backgroundColor: '#f0f0f0',
        },
        labelStyle: {
            marginTop: 0,
            marginBottom: 0
        },
        pressColor: '#ddd',
        indicatorStyle: {
            display: 'none'
        },
        showIcon: true
    },
    swipeEnabled: true,
    animationEnabled: true,
});

const Navigator = StackNavigator(
    {
        Tab: {screen: IndexTabNavigator},
        Detail: {screen: DetailScreen},
        Address: {screen: Address},
        EditAddress:{screen:EditAddress},
        Setting:{screen:Setting},
        UserProfile:{screen:UserProfile}
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            header: null,
            headerTintColor: '#333333',
            showIcon: true,
            swipeEnabled: false,
            animationEnabled: false,
        },
        mode: 'card'
    });

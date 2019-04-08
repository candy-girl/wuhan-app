import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Register from './register';
import Home from './home';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author:'zengxiaobai',
            selectedTab:'home'
        };
    }
    register(){
        const { navigator } = this.props;
        navigator.push({
            name: 'register',
            page: Register,
            params:{
                author:this.state.author
            }
        });
    }


    render() {

        var homeView = (
            <Home />
        )

        var profileView = (
            <Register />
        )

        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={require('../images/homeDark.png')} style={styles.img}/>}
                    renderSelectedIcon={() => <Image source={require('../images/home.png')} style={styles.img}/>}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    {homeView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() => <Image source={require('../images/userDark.png')} style={styles.img}/>}
                    renderSelectedIcon={() => <Image source={require('../images/user.png')} style={styles.img}/>}
                    // badgeText='2'
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    {profileView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'setting'}
                    title="Profile"
                    renderIcon={() => <Image source={require('../images/setDark.png')} style={styles.img}/>}
                    renderSelectedIcon={() => <Image source={require('../images/set.png')} style={styles.img}/>}
                    // badgeText='2'
                    onPress={() => this.setState({ selectedTab: 'setting' })}>
                    {profileView}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    img: {
        width: 25,
        height: 25,
    }
});

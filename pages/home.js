import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    goback(){
        this.props.navigator.pop()
    }

    render() {
        console.log(123,this.props.params)
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={()=>this.goback()}>
                    我是首页
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor:'#ccc',
        paddingTop: 10,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

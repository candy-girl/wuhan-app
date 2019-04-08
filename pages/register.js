import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Register extends Component {
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
            <View>
                <Text style={styles.welcome} onPress={()=>this.goback()}>
                    Welcome to register123!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

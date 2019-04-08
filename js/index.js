import React, { Component, PropTypes} from 'react';
import {Navigator} from "react-native-deprecated-custom-components";

import loginPage from '../pages/login';

const initialRoute = {
    name: 'login',
    page: loginPage,
}

export default class MyApp2 extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    renderScene({page,name,...props},navigator){
        console.log(22,name)
        if(page){
            return React.createElement(page,{
                ...props,
                name,
                navigator: navigator
            })
        }
    }

    // renderScene(route,navigator){
    //     let Component = route.component
    //     return <Component {...route.params} navigator={ navigator } />
    // }

    configureScene(route){
        if(route.sceneConfig){
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.PushFromRight;
    }

    render(){
        return (
            <Navigator
                initialRoute = { initialRoute }
                configureScene = { this.configureScene.bind(this) }
                renderScene = { this.renderScene.bind(this) }/>
        );
    }

}
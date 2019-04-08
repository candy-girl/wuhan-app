/**
 * @desc 导航
**/

import { StackNavigator } from 'react-navigation'
//用户登录注册
import LoginScreen from './login'
import RegisterScreen from './register'

const AppNavigator = StackNavigator({
  //用户登录注册
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },

}, {
  navigationOptions: {
    header: null
  }
})

export default AppNavigator

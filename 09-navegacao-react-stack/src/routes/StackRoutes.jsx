import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Feed from '../screens/Feed'
import Home from '../screens/Home'
import Posts from '../screens/Posts'

const Stack = createStackNavigator()

const StackRoutes = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Feed' component={Feed}/>
        <Stack.Screen name='Posts' component={Posts}/>
    </Stack.Navigator>
  )
}

export default StackRoutes
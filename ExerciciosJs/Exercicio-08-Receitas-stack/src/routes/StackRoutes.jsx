import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ReceitaScreen from '../screens/ReceitaScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='ReceitaScreen' component={ReceitaScreen}/>
    </Stack.Navigator>
  )
}


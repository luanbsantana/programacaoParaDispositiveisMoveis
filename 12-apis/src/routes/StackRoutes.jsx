import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

//Screens
import HomeScreen from '../screens/HomeScreen'
import UsuarioScreen from '../screens/UsuarioScreen'

const Stack = createStackNavigator()
export default function StackRoutes() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name='HomeScreen'
        component={HomeScreen} 
        options={{
            title: "Lista de Usuários",
            headerTitleAlign: 'center'
        }} />
        <Stack.Screen 
        name='UsuariosScreen'
        component={UsuarioScreen} 
        options={{
            title: "Usuários",
            headerTitleAlign: 'center'
        }} />
    </Stack.Navigator>
  )
}


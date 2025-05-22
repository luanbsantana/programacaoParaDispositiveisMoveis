import {PaperProvider} from 'react-native-paper'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import SettingsScreen from './screens/SettingsScreen.jsx';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name='HomeScreen' 
            component={HomeScreen}
            options={{
              title: 'Home',
              headerStyle:{
                backgroundColor: '#d1d1d1',
              },
              headerTintColor: '#f2f2f2',
            tabBarIcon: (color, size) => <Ionicons name='home-outline' color={color} size={size}/>
            }}
          />
          <Tab.Screen
           name='ProfileScreen'
           component={ProfileScreen}
           options={{
            title: 'Perfil',
            tabBarIcon: (color, size) => <Ionicons name='person-outline' color={color} size={size}/>
           }}
           />
          <Tab.Screen
          name='SettingsScreen' 
          component={SettingsScreen}
          options={{
            title: 'Configuração',
            tabBarIcon: (color, size) => <Ionicons name='cog-outline' color={color} size={size}/>
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}



import {PaperProvider} from 'react-native-paper'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';

import EscudoScreen from './screens/EscudoScreen';
import JogaresScreen from './screens/JogaresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name='EscudoScreen'
            component={EscudoScreen}
            options={{
              title: 'Escudo',
              headerStyle:{
                backgroundColor: '#910212',
              },
              tabBarActiveTintColor: '#910212',
              headerTintColor: '#C7A4A9',
            tabBarIcon: (color, size) => <Ionicons name='shield-half-outline' color={'#D4243B'} size={18}/>
            }}
           />
          <Tab.Screen
            name='JogadresScreen' 
            component={JogaresScreen}
            options={{
              title: 'Jogadores',
              headerStyle:{
                backgroundColor: '#910212',
              },
              headerTintColor: '#C7A4A9',
              tabBarActiveTintColor: '#910212',
            tabBarIcon: (color, size) => <Ionicons name='shirt-outline' color={'#D4243B'} size={18}/>
          }}
          />
          <Tab.Screen 
          name='TitulosScreen' 
          component={TitulosScreen}
          options={{
            title: 'Titulos',
            headerStyle:{
              backgroundColor: '#910212',
            },
            tabBarActiveTintColor: '#910212',
            headerTintColor: '#C7A4A9',
          tabBarIcon: (color, size) => <Ionicons name='star-outline' color={'#D4243B'} size={18}/>
        }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


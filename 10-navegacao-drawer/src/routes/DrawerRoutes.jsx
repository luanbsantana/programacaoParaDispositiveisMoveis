import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConfigScreen from "../screens/ConfigScreen";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Início",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen}
        options={{
            title: 'Perfil',
            drawerIcon: ({color, size}) => (
                <Ionicons name="people" color={color} size={size}/>
            )
        }}
      />
      <Drawer.Screen name="UserScreen" component={UserScreen}
        options={{
            title: 'Usuário',
            drawerIcon: ({color, size}) =>(
                <Ionicons name="person-circle-sharp" color={color} size={size}/>
            )
        }}
      />
      <Drawer.Screen name="ConfigScreen" component={ConfigScreen}
        options={{
            title: 'Usuário',
            drawerIcon: ({color, size}) =>(
                <Ionicons name="settings" color={color} size={size}/>
            )
        }}
      />
    </Drawer.Navigator>
  );
}

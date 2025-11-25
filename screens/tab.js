
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Hist from './historico'
import Configs from './configuracao';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function TabNavigator() {


  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: '#858585',
        headerShown: false,
        tabBarStyle: { backgroundColor: '#f5f5f5'}
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Histórico"
        component={Hist}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="history" size={size} color={'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={Configs}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={'black'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
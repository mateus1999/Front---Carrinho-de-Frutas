import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import {
    TouchableOpacity,
    View
}
    from 'react-native';

import Home from './Home'
import Login from './Login'
import HomeScreen from './HomeScreen'
import Account from './Account'

import { styles } from './styles'

import {
    Entypo,
    Feather,
    MaterialIcons
} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes() {

    return (

        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: 'white',
                    borderTopColor: 'transparent',
                    position: 'absolut'
                },
                activeTintColor: '#53B175',
                inactiveTintColor: '#030303',
                tabStyle:{
                    paddingBottom: 5,
                    paddingTop: 5
                }
            }}>
            <Tab.Screen
                name="Shop"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo
                            name="shop" size={30} color={color} />)
                }} />

            <Tab.Screen
                name="Explore"
                component={Login}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" size={30} color={color} />)
                }} />

            <Tab.Screen
                name="Cart"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="shopping-cart" size={30} color={color} />)
                }} />

            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="account-circle" size={30} color={color} />)
                }} />

        </Tab.Navigator>

    );
}
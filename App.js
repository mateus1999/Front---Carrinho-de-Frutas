import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from './src/Pages/routes'
import Home from './src/Pages/Home'
import Login from './src/Pages/Login'
import HomeScreen from './src/Pages/HomeScreen'
import Account from './src/Pages/Account'
import ProductDetail from './src/Pages/ProductDetail'
import OrganicBananas from './src/components/Details/OrganicBananas'
import BellPepperRed from './src/components/Details/BellPepperRed'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Routes" component={Routes} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="OrganicBananas" component={OrganicBananas} />
        <Stack.Screen name="BellPepperRed" component={BellPepperRed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type { Node } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import HomeScreen from './screens/Home'
import ScannerScreen from './screens/Scanner'
import AddProductScreen from './screens/AddProduct'
import ProductListScreen from './screens/ProductList'

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: '#2099e7'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: hp('1.5%'),
          },
        }} /* headerMode="none" */>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Scanner" component={ScannerScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AddProduct" component={AddProductScreen} options={{ title: 'Shipping Inventory' }} />
          <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Shipping Inventory' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

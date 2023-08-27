import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './HomeScreen'
import Checkout from './Checkout';
import Categories from './Categories';
import Paymentcheckout from './Paymentcheckout';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Shop by Category'}}
        />
        <Stack.Screen
          name = "Categories"
          component = {Categories}
          options={({ route }) => ({ title: route.params.titleValue})}
          />
          <Stack.Screen 
          name = "Checkout"
          component={Checkout}
          >
          </Stack.Screen>
          <Stack.Screen
          name = "Paymentcheckout"
          component = {Paymentcheckout}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
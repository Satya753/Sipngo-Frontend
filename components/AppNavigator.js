import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './HomeScreen'
import Category from './Category'
import Evening from './Evening'
import Morning from './Morning'
import Checkout from './Checkout';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Browse by Category'}}
        />
        <Stack.Screen
          name = "Category"
          component = {Category}
          options={({ route }) => ({ title: route.params.titleValue})}
          />
          <Stack.Screen 
          name = "Checkout"
          component={Checkout}
          >
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
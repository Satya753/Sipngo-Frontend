import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './HomeScreen'
import Checkout from './Checkout/Checkout';
import Categories from './Categories/Categories';
import Paymentcheckout from './Checkout/Paymentcheckout';
import SubscriptionDetails from './Subscription/SubscriptionDetails'
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "Drawer"
          component={DrawerNavigator}
          options={{
            title: "",
            headerShown: false
          }} />
       <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Shop by Category'}} />
        <Stack.Screen
          name = "Categories"
          component = {Categories}
          options={({ route }) => ({ 
            title: route.params.titleValue,
            headerShown : false
            })}/>
        <Stack.Screen 
          name = "Checkout"
          component={Checkout}/>
        <Stack.Screen
          name = "Paymentcheckout"
          component = {Paymentcheckout} />
        <Stack.Screen
          name = "SubscriptionDetails"
          component={SubscriptionDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default AppNavigator;
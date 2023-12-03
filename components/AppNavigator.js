import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './HomeScreen'
import Checkout from './Checkout/Checkout';
import Categories from './Categories/Categories';
import Paymentcheckout from './Checkout/Paymentcheckout';
import SubscriptionDetails from './Subscription/SubscriptionDetails'
import DrawerNavigator from './DrawerNavigator';
import { OrderSummary } from './OrderSummary/OrderSummary';
import Payment from './Payment/Payment';

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
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }} />
        <Stack.Screen
          name = "Categories"
          component = {Categories}
          options={({ route }) => ({ 
            title: route.params.titleValue,
            headerShown : false,
            headerStyle: {
              backgroundColor: '#f4511e',
            }
            })}/>
        <Stack.Screen 
          name = "Checkout"
          component={Checkout} 
          options={{
            headerShown : false
          }}/>
        <Stack.Screen
          name = "Paymentcheckout"
          component = {Paymentcheckout} 
          options={{
            headerShown: false
          }}/>
        <Stack.Screen
          name = "SubscriptionDetails"
          component={SubscriptionDetails}
          options={{
            title:"Subscription Details"
          }} />
        <Stack.Screen
          name = "OrderSummary"
          component={OrderSummary}
          options={{
            title:"Order Summary"
          }} />
        <Stack.Screen
          name = "Payment"
          component={Payment}
          options={{
            title:"Payments"
          }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default AppNavigator;
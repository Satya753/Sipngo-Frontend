import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './HomeScreen'
import Checkout from './Checkout/Checkout';
import Categories from './Categories/Categories';
import Paymentcheckout from './Checkout/Paymentcheckout';
import SubscriptionDetails from './Subscription/SubscriptionDetails'
import Signout from './Authentication/Signout';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Location from './UserDetails/Location'
const Drawer = createDrawerNavigator()
const  DrawerNavigator = () => {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="SubscriptionDetails" component={SubscriptionDetails} />
        <Drawer.Screen name = "Signout" component = {Signout}/>
        <Drawer.Screen name = "Location" component = {Location}/>
      </Drawer.Navigator>
  );
};

export default DrawerNavigator;
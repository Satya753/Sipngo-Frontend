import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {t} from 'react-native-tailwindcss'
import Cart from '../Cart';
import { NativeBaseProvider, Box, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
const Footer = ()=>{
    return (
        <View style = {t.h49}>
            <Cart/>
        </View>
    )
}

export default Footer;
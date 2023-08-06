import { Text, View, StyleSheet, Image  , FlatList } from 'react-native';
import { Button , Card} from 'react-native-paper';
import { useContext, useEffect , useState } from 'react';
import GlobalContext from './GlobalContext';
import { useNavigation } from '@react-navigation/native';
import {t , tw} from 'react-native-tailwindcss';




const Cart = ()=>{
    const {cartItem , setCartItem} = useContext(GlobalContext);
    const navigation = useNavigation();
    return(
    <View style  = {[t.h25, t.bgBlue200  , t.justifyEvenly ,t.flexRow ,t.p5]}>
            <View style = {[t.p3]}>
                <Text>{Object.length} Item in Cart</Text>
            </View>
            <View style = {[t.p3 , t.right0]}>
                <Button style = {[t.bgGreen400 , t.w20 ]}onPress={()=>navigation.navigate('Checkout')}>Next</Button>
            </View>
    </View>
    )
}

export default Cart;
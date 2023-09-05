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
    <View style  = {[t.h13, t.bgWhite  , t.justifyEvenly ,t.flexRow ,t.p5]}>
            <View style = {[t.p6]}>
                <Text style={[t.fontSemibold]}>{Object.keys(cartItem).length} ITEM</Text>
            </View>
            <View style = {[t.p3 , t.right10 , t.textWhite , t.roundedFull]}>
                <Button style = {[t.bgGreen600 , t.w40  , t.h10, t.right10 , t.textWhite  , t.roundedLg]}onPress={()=>navigation.navigate('Checkout')}><Text style={[t.textWhite]}>Next</Text></Button>
            </View>
    </View>
    )
}

export default Cart;
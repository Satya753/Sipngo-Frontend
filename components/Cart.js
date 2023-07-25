import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from '@rneui/themed';
import { Button } from 'react-native-paper';
import { useEffect , useState } from 'react';

const Cart = (props)=>{
    console.log("this is the cart" , props.value.cartItem)
    return(
    <View>
        <div>{props.value.cartItem}</div>
    </View>
    )
}

export default Cart;
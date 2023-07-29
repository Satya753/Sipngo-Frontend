import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from '@rneui/themed';
import { Button } from 'react-native-paper';
import { useContext, useEffect , useState } from 'react';
import GlobalContext from './GlobalContext';
import { useNavigation } from '@react-navigation/native';




const Cart = ()=>{
    const {cartItem , setCartItem} = useContext(GlobalContext);
    const navigation = useNavigation();
    return(
    <View>
        {Object.keys(cartItem).map((key)=>(
            <div>
                <Text>{key}</Text>
            </div>
        ))}
        <Button onPress={()=>navigation.navigate('Checkout')}>View Cart</Button>
    </View>
    )
}

export default Cart;
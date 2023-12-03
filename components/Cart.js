import { Text, View, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import GlobalContext from './GlobalContext';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from './Styles/CartStyles';

const Cart = ()=>{
    const {cartItem, totalAmount } = useContext(GlobalContext);
    const navigation = useNavigation();
    
    return(
    <View style={styles.main}>
        <View style = {styles.cartText_wrapper}>
            <Feather name="shopping-bag" size={24} color="white" />
            <Text style={styles.cartText_text}>{Object.keys(cartItem).length} Item </Text>
        </View>
        <View style = {styles.cartButton_wrapper}>
            <TouchableOpacity style={styles.cartButton_button}onPress={()=>navigation.navigate('Checkout')}>
                <AntDesign name="shoppingcart" size={24} color="white" />
                <Text style={styles.cartButton_buttonText}>View Cart</Text>
                <Text style={styles.cartText_text}>{'\u20B9'}{totalAmount}</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default Cart;
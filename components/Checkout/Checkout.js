import { Text, View, TouchableOpacity } from 'react-native';
import { useContext, } from 'react';
import GlobalContext from '../GlobalContext';
import { ScrollView } from 'react-native-gesture-handler';
import styles  from '../Styles/CheckoutStyles';

import { useNavigation } from '@react-navigation/native';


const Checkout = ()=>{
    const navigation = useNavigation();
    const {cartItem , setCartItem, totalAmount} = useContext(GlobalContext);
    
    const addToCart = (amount , name) =>{
        const curCart = {...cartItem};
        if (name in curCart){
          curCart[name].cnt+=1;
        }
        else{
          curCart[name] = {"amount":amount , "cnt":1};
        }        
        setCartItem(curCart);
      }
    
    const removeFromCart=(amount , name)=>{
      const curCart = {...cartItem};
      curCart[name].cnt-=1;
  
      if (curCart[name].cnt==0){
        delete curCart[name];
      }
    //  setShowCart(showCart-1);
      setCartItem(curCart);
    }

    return(
    <View style={styles.main}>
        <Text style={styles.header}>ITEMS ADDED</Text>
        <ScrollView style = {styles.scrollViewContainer}>
          {Object.keys(cartItem).map((key ,id)=>(
            <View style={styles.item} key={id}>
              <View style = {styles.itemName_wrapper}>
                  <Text style={styles.itemName}>{key}</Text>
                  <Text style={styles.itemCost}>₹{cartItem[key].amount}</Text>
              </View>
              <View style={styles.itemCountContainer}>
                <View style = {styles.itemCountControl}>
                  <TouchableOpacity style={styles.itemCount_decrease} onPress = {()=>removeFromCart(cartItem[key].amount , key)}>
                    <Text style={styles.itemCountControl_text}>-</Text>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.itemCount_text}>{cartItem[key].cnt}</Text>
                  </View>
                  <TouchableOpacity style={styles.itemCount_increase} onPress={()=>addToCart(cartItem[key].amount , key)}>
                    <Text  style={styles.itemCountControl_text}>+</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.itemCount_amountText}>₹{cartItem[key].amount*cartItem[key].cnt}</Text>
                </View>
              </View>
            </View>
        ))}
        </ScrollView>
        <View style={styles.billContainer}>
          <Text style={styles.header}>BILL SUMMARY</Text>
          <View style={styles.bill_body}>
            <Text style={styles.billText}>Net Payable </Text>
            <Text style={styles.billText_amount}>₹{totalAmount}</Text>
          </View>
        </View>
        <View style ={styles.footer}>
          <TouchableOpacity 
            style = {styles.footer_button} 
            onPress={()=>navigation.navigate('OrderSummary')}>
              <Text style={styles.footer_buttonText}>
                Checkout
              </Text>
              <View>
                <Text style={styles.footer_totalAmount}>₹{totalAmount}</Text>
                <Text style={styles.footer_totalText} >TOTAL</Text>
              </View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Checkout;
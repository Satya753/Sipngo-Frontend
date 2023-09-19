import { Text, View } from 'react-native';
import { Button , Card} from 'react-native-paper';
import { useContext, useEffect , useState } from 'react';
import GlobalContext from '../GlobalContext';
import {t} from 'react-native-tailwindcss'
import { ScrollView , TouchableOpacity } from 'react-native-gesture-handler';
import Base64Image from '../Base64Image';
import styles  from '../Styles/CheckoutStyles';

import { useNavigation } from '@react-navigation/native';


const Checkout = ()=>{
    const navigation = useNavigation();
    const {cartItem , setCartItem} = useContext(GlobalContext);

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
        <ScrollView style = {styles.scrollViewContainer}>
          {Object.keys(cartItem).map((key ,id)=>(
            <View style={styles.card} key={id}>
              <View style = {[t.m4 , t.flexCol]}>
                <View>
                  <Base64Image base64String={cartItem[key].image}/>
                </View>
                <View style={[t.justifyCenter]}>
                  <Text>{key}</Text>
                </View>
              </View>
              <View style={styles.countControlContainer}>
                <View style = {[t.flexRow , t.bgGreen600 , t.roundedFull]}>
                  <Button onPress = {()=>removeFromCart(cartItem[key].amount , key)}>
                    <Text style={[t.textWhite , t.fontExtrabold	]}>-</Text>
                  </Button>
                  <View style={[t.justifyCenter]}>
                    <Text  style={[t.textWhite , t.fontExtrabold	]}>{cartItem[key].cnt}</Text>
                  </View>
                  <Button onPress={()=>addToCart(cartItem[key].amount , key)}>
                    <Text  style={[t.textWhite , t.fontExtrabold	]}>+</Text>
                  </Button>
                </View>
                <View style =  {[t.flexRow , t.justifyCenter]}>
                  <Text>Amount   </Text>
                  <Text>{cartItem[key].amount*cartItem[key].cnt}</Text>
                </View>
              </View>
            </View>
        ))}
        </ScrollView>
      
        <View style ={styles.buttonView}>
          <TouchableOpacity 
            style = {styles.button} 
            onPress={()=>navigation.navigate('Paymentcheckout' , {items:cartItem})}>
              <Text style={styles.buttonText}>
                Select Subscription Days
              </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Checkout;
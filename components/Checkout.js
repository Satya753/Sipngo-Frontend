import { Text, View, StyleSheet, Image , FlatList } from 'react-native';
import { Button , Card} from 'react-native-paper';
import { useContext, useEffect , useState } from 'react';
import GlobalContext from './GlobalContext';
import SelectDropdown from 'react-native-select-dropdown';
import {t} from 'react-native-tailwindcss'
import config from '../Utils/Config';
import { ScrollView , TouchableOpacity } from 'react-native-gesture-handler';
import {styled} from 'react-native-tailwindcss'
import Base64Image from './Base64Image';
import { useNavigation } from '@react-navigation/native';


const Checkout = ()=>{
    const navigation = useNavigation();

    const {cartItem , setCartItem} = useContext(GlobalContext);
 //   const {showCart , setShowCart} = useContext(GlobalContext);
 


    const addToCart = (amount , name) =>{
        const curCart = {...cartItem};
        if (name in curCart){
          curCart[name].cnt+=1;
        }
        else{
          curCart[name] = {"amount":amount , "cnt":1};
        }

       // setShowCart(showCart+1);
        
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
    <View style  = {[t.p13, t.m18 , t.flexCol , t.flex1]}>
        <ScrollView style = {[t.h20]}>
        {Object.keys(cartItem).map((key)=>(
          <View style={[ t.flexRow , t.p2 , t.m10 , t.h7]}>
                <View style = {[t.m4 , t.flexCol]}>
                <View><Base64Image base64String={cartItem[key].image}/></View>
                <View style={[t.justifyCenter]}><Text>{key}</Text></View>
                </View>
                {/* <Text>{cartItem[key].amount}</Text>
                <Text>{cartItem[key].cnt}</Text>     */}
                <View style = {[t.flexCol , t.p4 , t.justifyCenter]}>
                <View style = {[t.flexRow , t.bgGreen600 , t.roundedFull]}>
                <Button onPress = {()=>removeFromCart(cartItem[key].amount , key)}><Text style={[t.textWhite , t.fontExtrabold	]}>-</Text></Button>
                <View style={[t.justifyCenter]}><Text  style={[t.textWhite , t.fontExtrabold	]}>{cartItem[key].cnt}</Text></View>
                <Button onPress={()=>addToCart(cartItem[key].amount , key)}><Text  style={[t.textWhite , t.fontExtrabold	]}>+</Text></Button>
                </View>
                <View style =  {[t.flexRow , t.justifyCenter]}>
                  <Text>Amount   </Text>
                  <Text>{cartItem[key].amount*cartItem[key].cnt}</Text>
                </View>
                </View>
            </View>
        ))}
        </ScrollView>
      
        <View style ={[t.itemsCenter]}>
    <View style={[t.roundedFull , t.bgBlue700 , t.textWhite]}>
    <Button onPress = {()=>navigation.navigate('Paymentcheckout' , {items:cartItem})}><Text style={[t.textWhite]}>Place Order and Select Subscription Days</Text></Button>
    </View>
    </View>
    </View>
    )
}

export default Checkout;
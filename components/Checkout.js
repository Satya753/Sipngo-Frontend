import { Text, View, StyleSheet, Image , FlatList } from 'react-native';
import { Button , Card} from 'react-native-paper';
import { useContext, useEffect , useState } from 'react';
import GlobalContext from './GlobalContext';
import SelectDropdown from 'react-native-select-dropdown';
import {t} from 'react-native-tailwindcss'
import config from '../Utils/Config';
import { ScrollView , TouchableOpacity } from 'react-native-gesture-handler';
import {styled} from 'react-native-tailwindcss'
const slot = ["Evening" , "Morning"]
const days = [7 , 14 , 30]


const placeOrder = async (cartItem , slot , days)=>{
    let userId = 'satya123'
    console.log(cartItem , slot , days);
    let postOrder = {};
    postOrder["user_id"]=userId
    postOrder["orders"] = []
    postOrder["slot"] = slot
    postOrder["days"] = days

    for(const key in cartItem){
        postOrder["orders"].push([cartItem[key].id , cartItem[key].cnt , cartItem[key].amount])
    }

    // Make a post request

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(postOrder)
    }

    const responseData = await fetch(`${config.flaskapi}/home/add_order`, requestOptions)
    setCartItem({})

}
const Checkout = ()=>{

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
    
    let selectedSlot = null;
    let selectedDays = null;
      

    return(
    <View style  = {[t.p13, t.m18 , t.flexCol , t.flex1]}>
        <ScrollView style = {[t.h20]}>
        {Object.keys(cartItem).map((key)=>(
          <Card style={[ t.justifyBetween]}>
            <View style ={[ t.flexRow , t.p10 , t.m4]}>
                <View style = {[t.m4]}>
                <Text>{key}</Text>
                </View>
                {/* <Text>{cartItem[key].amount}</Text>
                <Text>{cartItem[key].cnt}</Text>     */}
                <View style = {[t.h9, t.w28, t.flexRow , t.bgGreen600 , t.m4 , t.end0]}>
                <View >
                <Button onPress = {()=>removeFromCart(cartItem[key].amount , key)}>-</Button>
                </View>
                <View>
                <Text>{cartItem[key].cnt}</Text>
                </View>
                <View >
                 <Button onPress={()=>addToCart(cartItem[key].amount , key)}>+</Button>
                </View>
                </View>

                <View>
                  <Text>Total Amount</Text>
                  <Text>{cartItem[key].amount*cartItem[key].cnt}</Text>
                </View>
              
            </View>
            </Card>
        ))}
        </ScrollView>
      
        <View style ={[t.itemsCenter]}>
    <SelectDropdown
    defaultButtonText='select a slot'
	data={slot}
	onSelect={(selectedItem, index) => {
        selectedSlot = selectedItem;
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		return item
	}}
    >
    </SelectDropdown>
    <SelectDropdown
    defaultButtonText='Select subscription'
	data={days}
	onSelect={(selectedItem, index) => {
        selectedDays = selectedItem;
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		return item
	}}
    ></SelectDropdown>
    <Button onPress = {()=>placeOrder(cartItem , selectedSlot  , selectedDays)}>Place Order</Button>
    </View>
    </View>
    )
}

export default Checkout;
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from '@rneui/themed';
import { Button } from 'react-native-paper';
import { useContext, useEffect , useState } from 'react';
import GlobalContext from './GlobalContext';
import SelectDropdown from 'react-native-select-dropdown';

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

    const responseData = await fetch('http://192.168.29.18:5000/home/add_order' , requestOptions)

    console.log(postOrder)
}
const Checkout = ()=>{

    const {cartItem , setCartItem} = useContext(GlobalContext);
 //   const {showCart , setShowCart} = useContext(GlobalContext);


    const addToCart = (amount , name) =>{
        const curCart = {...cartItem};
        if (name in curCart){
          curCart[name].amount += amount;
          curCart[name].cnt+=1;
        }
        else{
          curCart[name] = {"amount":amount , "cnt":1};
        }

       // setShowCart(showCart+1);
        
        setCartItem(curCart);
        console.log(cartItem);
      }
    
      const removeFromCart=(amount , name)=>{
        const curCart = {...cartItem};
        curCart[name].amount-=amount;
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
    <View>
        {Object.keys(cartItem).map((key)=>(
            <div>
                <Text>{key}</Text>
                <View>
                <Text>{cartItem[key].amount}</Text>
                <Text>{cartItem[key].cnt}</Text>    
                <Button onPress={()=>addToCart(cartItem[key].amount , key)}>Add</Button>
                 <Button onPress = {()=>removeFromCart(cartItem[key].amount , key)}>Remove</Button>
                </View>
            </div>
        ))}
    <SelectDropdown
    defaultButtonText='select a slot'
	data={slot}
	onSelect={(selectedItem, index) => {
        selectedSlot = selectedItem;
		console.log(selectedItem, index)
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
    defaultButtonText='select no of days'
	data={days}
	onSelect={(selectedItem, index) => {
        selectedDays = selectedItem;
		console.log(selectedItem, index)
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
    )
}

export default Checkout;
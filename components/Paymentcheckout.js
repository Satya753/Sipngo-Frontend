import { Text, View, StyleSheet, Image,ScrollView } from 'react-native';
import { useRoute  } from "@react-navigation/native"
import { Card } from '@rneui/themed';
import { Button } from 'react-native-paper';
import { useContext, useEffect , useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import config from '../Utils/Config';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import GlobalContext from './GlobalContext';



const Paymentcheckout = ()=>{
    const route = useRoute();
    const cartItem = route.params?.items;
    let selectedSlot = null;
    console.log(markedDays);
    const [markedDays , setMarkedDays] = useState([])

    const slot = ["Evening" , "Morning"]

const placeOrder = async (cartItem , slot , days)=>{
    let userId = global.d['uid']
    let daytoSend = [];
    for (const key in  days){
        console.log(days[key] , 'this is single day')
        if (days[key].selected)
            daytoSend.push(key)
    }
    let postOrder = {};
    postOrder["user_id"]=userId
    postOrder["orders"] = []
    postOrder["slot"] = slot
    postOrder["days"] = daytoSend
    console.log(postOrder["days"] , 'this are the days')
    let tot = 0;
    for(const key in cartItem){
        postOrder["orders"].push([cartItem[key].id , cartItem[key].cnt , cartItem[key].amount])
        tot = tot + cartItem[key].cnt*cartItem[key].amount;
    }
    postOrder["total_amount"] = tot*30;

    console.log(postOrder , 'payload sent')

    // Make a post request

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(postOrder)
    }

    const responseData = await fetch(`${config.flaskapi}/home/add_order`, requestOptions)
    

}

    useEffect(()=>{
        let marked= {...markedDays}
        let cur = new Date();
        for (let i = 0 ; i <30 ; i++){
            marked[moment(cur).format('YYYY-MM-DD')] = {selected:true , selectedColor: '#aa2222'}
            cur.setDate(cur.getDate() + 1);
        }
        setMarkedDays(marked);
    } , [])
    return (
        <View>
        <Calendar  onDayPress={(day)=>{console.log('this is the date' ,markedDays[day.dateString] , day.dateString);let marked = {...markedDays}; marked[day.dateString].selected=!marked[day.dateString].selected
        setMarkedDays(marked);
        }} markedDates={markedDays}/>

        <SelectDropdown
        defaultButtonText='select a Slot'
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

        <Button onPress = {()=>placeOrder(cartItem , selectedSlot ,  markedDays)}>Place Order</Button>
        </View>
    )
}

export default Paymentcheckout;
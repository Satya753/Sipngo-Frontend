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
import Dialog from "react-native-dialog";




const Paymentcheckout = ()=>{
    const route = useRoute();
    const cartItem = route.params?.items;
    let selectedSlot = null;
    console.log(markedDays);
    const [markedDays , setMarkedDays] = useState([])
    const [showDialog , setShowDialog] = useState(false)

    const slot = ["Evening" , "Morning"]

const placeOrder = async (cartItem , slot , days)=>{
    let userId = global.d['uid']
    let daytoSend = [];
    for (const key in  days){
        if (days[key].selected)
            daytoSend.push(key)
    }

    console.log('these are the days');

    if (daytoSend.length<30){
        console.log('Less than 30 days' , daytoSend)
        setShowDialog(true);
        return ;
    }
    let postOrder = {};
    postOrder["user_id"]=userId
    postOrder["orders"] = []
    postOrder["slot"] = slot
    postOrder["days"] = daytoSend
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
    const renderCartItem = []

    Object.keys(cartItem).forEach((item)=>{
        renderCartItem.push(<View><Text>{item}</Text><Text>{cartItem[item].amount}</Text><Text>{cartItem[item].cnt}</Text></View>)
    })

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
        
            <View>
            <Dialog.Container visible = {showDialog}>
        <Dialog.Title>Subscription Days less than 30 days</Dialog.Title>
        <Dialog.Description>
            Subscription days is less than 30 days , please have a look into the calendar to go through the days.
            </Dialog.Description>
            <Dialog.Button label="OK" onPress={()=>setShowDialog(false)} />
        </Dialog.Container>
        </View>
        
        <Calendar  onDayPress={(day)=>{console.log('this is the date' ,markedDays[day.dateString] , day.dateString);let marked = {...markedDays}; marked[day.dateString].selected=!marked[day.dateString].selected
        setMarkedDays(marked);
        }} markedDates={markedDays}/>

        <View>
            {renderCartItem}
        </View>

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
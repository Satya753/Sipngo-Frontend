import { Text, View, StyleSheet, Image,ScrollView } from 'react-native';
import { useRoute  } from "@react-navigation/native"
import { Card } from '@rneui/themed';
import { Button } from 'react-native-paper';
import { useContext, useEffect , useState , useMemo } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import config from '../../Utils/Config';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import GlobalContext from '../GlobalContext';
import Dialog from "react-native-dialog";
import ConfirmItem from './ConfirmItem';
import Styles  from '../Styles/payments';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import Styles from '../Styles/signinstyles'
import {t} from 'react-native-tailwindcss'

import { RadioGroup } from 'react-native-radio-buttons-group';



const Paymentcheckout = ()=>{
    const route = useRoute();
    const Items = route.params?.items;
    let selectedSlot = null;
    console.log(markedDays);
    const [markedDays , setMarkedDays] = useState([])
    const [showDialog , setShowDialog] = useState(false)
    const {cartItem , setCartItem} = useContext(GlobalContext);
    const {showCart , setShowCart} = useContext(GlobalContext);
    const [slot , setSlot] = useState();

    const slotRadioButtonGroup = useMemo(()=>([{
        id:'1',
        label:'Morning',
        value : 'Morning'
    },
    {
        id:'2',
        label:'Evening',
        value:'Evening'
    },]) , [])

const placeOrder = async (Items , slot , days)=>{
    let userId = global.d['uid']
    let daytoSend = [];
    for (const key in  days){
        if (days[key].selected)
            daytoSend.push(key)
    }

    console.log('these are the days' , slot);

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
    for(const key in Items){
        postOrder["orders"].push([Items[key].id , Items[key].cnt , Items[key].amount])
        tot = tot + Items[key].cnt*Items[key].amount;
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

    try{
    const responseData = await fetch(`${config.flaskapi}/home/add_order`, requestOptions)
        const data = await responseData.json();
        console.log(data[1] , ' this is response from payment')

        if (data[1]==200){
            setCartItem({})
            setShowCart(0);
        }
        return Promise.resolve(data)
    }
    catch(e){
        console.log('this is error')
        return Promise.reject(e);
    }
    

}
    const renderCartItem = []

    Object.keys(Items).forEach((item)=>{
        renderCartItem.push(<ConfirmItem itemName = {item} amount = {Items[item].amount} cnt = {Items[item].cnt}></ConfirmItem>)
    })

    useEffect(()=>{
        let marked= {...markedDays}
        let cur = new Date();
        for (let i = 0 ; i <30 ; i++){
            marked[moment(cur).format('YYYY-MM-DD')] = {selected:true , selectedColor: '#9AF89A' , selectedTextColor: 'black',}
            cur.setDate(cur.getDate() + 1);
        }
        setMarkedDays(marked);
    } , [])
    console.log(slot , 'this is the slot change')
    return (
        <View>
        
            <View>
            {/* <Dialog.Container visible = {showDialog}>
        <Dialog.Title>Subscription Days less than 30 days</Dialog.Title>
        <Dialog.Description>
            Subscription days is less than 30 days , please have a look into the calendar to go through the days.
            </Dialog.Description>
            <Dialog.Button label="OK" onPress={()=>setShowDialog(false)} />
        </Dialog.Container> */}
        </View>
        
        <Calendar  onDayPress={(day)=>{console.log('this is the date' ,markedDays[day.dateString] , day.dateString);let marked = {...markedDays}; marked[day.dateString].selected=!marked[day.dateString].selected
        setMarkedDays(marked);
        }} markedDates={markedDays}/>

        <ScrollView style = {Styles.scrollview} >
            {renderCartItem}
        </ScrollView>
        <View style = {Styles.slot}>
        {/* <SelectDropdown style = {Styles.dropdownslot}
        defaultButtonText={<>Select Slot</>}
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
        </SelectDropdown> */}
        <RadioGroup 
        radioButtons={slotRadioButtonGroup}
        onPresss = {setSlot}
        selectedId={slot}
        />
        </View>
    <View style = {Styles.buttonView}>
    <TouchableOpacity 
          style = {Styles.button} 
          onPress={()=>placeOrder(Items , selectedSlot ,  markedDays)}>
            <Text style={Styles.buttonText}>
              Procced to  Pay
            </Text>
        </TouchableOpacity>

    </View>
        </View>
    )
}

export default Paymentcheckout;
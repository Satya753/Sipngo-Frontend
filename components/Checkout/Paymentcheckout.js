import { Text, View,ScrollView } from 'react-native';
import { useNavigation, useRoute  } from "@react-navigation/native"
import { useContext, useEffect , useState , useMemo } from 'react';
import config from '../../Utils/Config';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import GlobalContext from '../GlobalContext';
import ConfirmItem from './ConfirmItem';
import styles  from '../Styles/payments';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {RadioButton} from 'react-native-paper'

const Paymentcheckout = ()=>{
    const route = useRoute();
    const Items = route.params?.items;
    let selectedSlot = null;
    const [markedDays , setMarkedDays] = useState([])
    const [showDialog , setShowDialog] = useState(false)
    const {cartItem , setCartItem, setShowCart, totalAmount}  = useContext(GlobalContext);
    const [slot , setSlot] = useState();
    const navigation = useNavigation();

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

    if (daytoSend.length<30){
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

    return (
        <View style={{flex : 1}}>
            <Text style={styles.header}>Payment Checkout</Text>
            <View style = {styles.calenderWrapper}>
                <Calendar 
                style={{borderRadius:10, padding: 5}}
                    onDayPress={(day)=>{
                        console.log('this is the date' ,markedDays[day.dateString] , day.dateString);
                        let marked = {...markedDays}; 
                        marked[day.dateString].selected=!marked[day.dateString].selected;
                        setMarkedDays(marked);
                    }} 
                    markedDates={markedDays}/>
            </View>
            <View style={styles.slotContainer}>
                <Text style={styles.radioText}>Select Slot </Text>
                <View style = {styles.radionButtongroup}>
                    <View style = {styles.radiobuttonview}>
                        <Text style = {styles.radioText}>Morning</Text>
                        <RadioButton 
                            value  = "Morning"
                            label = "Morning"
                            status={slot==='Morning'?'checked':'unchecked'}
                            onPress={()=>setSlot('Morning')} >
                            </RadioButton>
                    </View>
                    <View style = {styles.radiobuttonview}>
                    <Text style = {styles.radioText} >Evening</Text>
                        <RadioButton 
                            value = "Evening"
                            status = {slot=='Evening'?'checked':'unchecked'}
                            onPress={()=>setSlot('Evening')}>
                        </RadioButton>
                    </View>
                </View>
            </View>
            <View style={styles.amountWrapper}>
                <Text style={styles.amount_text}>Total Payable Amount </Text>
                <Text style={styles.amount_text}>₹{totalAmount}</Text>
            </View>
            <View style = {styles.buttonView}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>navigation.navigate('Checkout')}>
                    <Text style={styles.buttonText}>
                        Back to {'\n'} Items
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.button} 
                    onPress={()=>placeOrder(Items , selectedSlot ,  markedDays)}>
                        <Text style={styles.buttonText}>Procced to {'\n'} Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Paymentcheckout;
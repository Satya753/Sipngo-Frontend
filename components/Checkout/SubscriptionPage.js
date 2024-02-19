import { Text, View } from 'react-native';
import { useNavigation, useRoute  } from "@react-navigation/native"
import { useContext, useEffect , useState , useMemo } from 'react';
import { Calendar } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-gesture-handler';
import config from '../../Utils/Config';
import moment from 'moment';
import GlobalContext from '../GlobalContext';
import styles  from '../Styles/payments';

import {RadioButton} from 'react-native-paper'

const SubscriptionPage = () => {

    const {cartItem, setShowCart, totalAmount}  = useContext(GlobalContext);
    const [markedDays , setMarkedDays] = useState({})
    const [showDialog , setShowDialog] = useState(false)
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

    const placeOrder = async (slot , days)=>{
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
        postOrder["user_id"] = userId
        postOrder["orders"] = []
        postOrder["slot"] = slot
        postOrder["days"] = daytoSend
        let tot = 0;
        for(const key in cartItem){
            postOrder["orders"].push([cartItem[key].id , cartItem[key].cnt , cartItem[key].amount])
            tot = tot + cartItem[key].cnt*cartItem[key].amount;
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
            fetch(`${config.flaskapi}/home/add_order`, requestOptions)
                .then( response => response.json() )
                .then( responseData => {
                    if (responseData[1]==200){
                        navigation.navigate('OrderSummary');
                        setShowCart(0);
                    }
                })
        }
        catch(e){
            return Promise.reject(e);
        }
    }

    useEffect(()=>{
        let marked= {...markedDays}
        let cur = new Date();
        for (let i = 0 ; i<30 ; i++){
            marked[moment(cur).format('YYYY-MM-DD')] = {selected:true , selectedColor: '#9AF89A' , selectedTextColor: 'black',}
            cur.setDate(cur.getDate() + 1);
        }
        setMarkedDays(marked);
    } , [])

    return (
        <View style={{flex : 1}}>
            <Text style={styles.header}>Subscription Details</Text>
            <View style = {styles.calenderWrapper}>
                <Calendar 
                    style={{borderRadius:10, padding: 5}}
                    onDayPress={(day)=>{
                        console.log(markedDays);
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
            <View style = {styles.buttonView}>
                <TouchableOpacity 
                    style = {styles.button} 
                    onPress={()=>placeOrder(slot,markedDays)}>
                        <Text style={styles.buttonText}>Procced to Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SubscriptionPage;
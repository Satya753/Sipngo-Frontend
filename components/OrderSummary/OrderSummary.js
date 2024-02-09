import React, { useContext, useCallback, useEffect, useState } from 'react';
import { Alert, Text, View, Linking, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import style from './styles';
import GlobalContext from '../GlobalContext';
import config from '../../Utils/Config';

export const OrderSummary = () => {
  
  const navigation = useNavigation();
  const { cartItem, totalAmount } = useContext(GlobalContext);
  const [ paymentStatus, setPaymentStatus ] = useState('');
  const [ transactionId, setTransactionId ] = useState(null);

  const OnPlaceOrderPressHandler = () => {
    const options = {
      method: "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        "user_id" : global.d['uid'],
        "amount" : totalAmount
      })
    }
    
    fetch(`${config.flaskapi}/home/payment`, options)
    .then(response => response.json())
    .then(response => openURL(response.data));
  }
  
  const openURL = useCallback(async (transactionData) => {
    const transactionUrl = transactionData.instrumentResponse.redirectInfo.url;
    const transactionId = transactionData.merchantTransactionId;

    const supported = await Linking.canOpenURL(transactionUrl);

    if (supported) {
      await Linking.openURL(transactionUrl);
      setTransactionId(transactionId);
    } else {
      Alert.alert(`Don't know how to open this URL: ${transactionUrl}`);
    }
  });

  if(transactionId){
    (()=>{
      const options = {
            method : "GET",
            headers : {
              "Content-Type" : "application/json",
              "accept": "application/json"
            },
          }

      const timer1 = setInterval( async () => {
        const status = await fetch(`${config.flaskapi}/home/paymentStatus?id=${transactionId}`, options);
        const statusResponse =  await status.json();
        setPaymentStatus(statusResponse.code);

        if(statusResponse.code === "PAYMENT_SUCCESS"){
          clearInterval(timer1);
          navigation.navigate("Payment", {paymentStatus: "SUCCESS"})
        }
        console.log(statusResponse.code);
      }, 10000)

      return () => {
        console.log("Interval cleared");
        clearInterval(timer1, 30000);
      };
    })();
  }

  return (
    <View style={style.main}>
      <ScrollView>
        <View style={style.addressWrapper}>
            <View style={style.userInfo}>
                <Text style={style.userName}>Abhijeet Behera</Text>
                <Text style={style.addressType}>HOME</Text>
            </View>
            <Text style={style.addressInfo}>
              Ground Floor, Near Chandan pookhri bhimpura ... 
            </Text>
            <Text>9667648838</Text>
            <View style={style.changeBtnWrapper}>
              <Button 
                onPress={()=> navigation.navigate('Profile')} 
                title='Change' 
                color='#cc5200'/>
            </View>
        </View>
        <View style={style.subscriptionWrapper}>
          <Text style={style.priceHeader}>Subscription Details</Text>
          <View style={style.subscriptionBtnWrapper}>
            <Button 
            title='Select Subscription Details'
            color='#cc5200'
            onPress={()=> navigation.navigate('Paymentcheckout') } />
          </View>
        </View>
        <View style={style.priceDetailsWrapper}>
          <Text style={style.priceHeader}>Price Details</Text>
          <View style={style.price_item}>
            <Text>Price({Object.keys(cartItem).length} Items)</Text>
            <Text>₹{totalAmount}</Text>
          </View>
          <View style={style.price_item}>
            <Text>Discount </Text>
            <Text style={{color: '#cc5200'}}>NA</Text>
          </View>
          <View style={style.price_item}>
            <Text>Delivery Charges</Text>
            <Text style={{color: '#cc5200'}}>₹FREE</Text>
          </View>
          <Text style={{color: 'grey', marginHorizontal: 2}} ellipsizeMode="clip" numberOfLines={1}>
            &nbsp;- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - -
          </Text>
          <View style={style.price_item}>
            <Text style={{fontWeight: '600'}}>Total Amount</Text>
            <Text style={{fontWeight: '600'}}>₹{totalAmount}</Text>
          </View>
        </View>
      </ScrollView>
        <View style={style.footer}>
          <View>
            <Text style={style.footer_amount}>₹{totalAmount}</Text>
          </View>
          <View>
            <Button
              title='Place order'
              color='#cc5200'
              // onPress={OnPlaceOrderPressHandler}
              onPress={()=> navigation.navigate("Payment", {paymentStatus: "SUCCESS"})}>
            </Button>
          </View>
        </View>
    </View>
  )
}

import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import style from './styles'
import GlobalContext from '../GlobalContext'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export const OrderSummary = () => {
  
  const navigation = useNavigation();
  const {cartItem, totalAmount} = useContext(GlobalContext);
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
        </View>

        <View style={style.subscriptionWrapper}>
          <Text style={style.priceHeader}>Subscription Details</Text>
          <TouchableOpacity 
            style={style.subscriptionBtn}
            onPress={()=> navigation.navigate('Paymentcheckout') }>
            <Text style={style.subscriptionLabel}>Select Subscription Details</Text>
          </TouchableOpacity>
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
            <TouchableOpacity 
              style={style.footerBtn}
              onPress={()=> navigation.navigate('Payment')}>
              <Text style={style.footerBtn_text}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>

    </View>
  )
}

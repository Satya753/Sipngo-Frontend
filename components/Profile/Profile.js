import React, {useContext, useState} from 'react'
import { View, Text, Button, Input, TextInput } from 'react-native'
import * as Location from 'expo-location';
import styles from './styles';
import GlobalContext from '../GlobalContext';

const Profile = () => {
  const { userDetails, setUserDetails } = useContext(GlobalContext);
  const [address, setAddress] = useState('Loading....');
  const [errorMsg, setErrorMsg] = useState(null);

  const locationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    Location.getCurrentPositionAsync({})
      .then(res => {
          Location.reverseGeocodeAsync({
            latitude : res.coords.latitude,
            longitude: res.coords.longitude
          }).then(res => setAddress(res));
      })
  };
  return (
    <View style={styles.main}>
      <View style={styles.currLocationBtn}>
        <Button
          title='Use current location'
          color='#cc5200'
          onPress={locationPermission}>
        </Button>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <View style={{flex:1, height: 2, backgroundColor: '#000'}} />
        <View>
          <Text style={{width: 30, color:'#000', fontSize: 17, textAlign: 'center'}}>OR</Text>
        </View>
        <View style={{flex: 1, height: 2, backgroundColor: '#000'}} />
      </View>
      <View style={styles.userDetails}>
        <Text 
          style={styles.textInputLabel}>
          Full name (First and Last name)
        </Text>
        <TextInput style={styles.textInput} value={userDetails.user_name}/>
        <Text style={styles.textInputLabel}>Mobile number</Text>
        <TextInput style={styles.textInput}/>
      </View>
    </View>
  )
}

export default Profile
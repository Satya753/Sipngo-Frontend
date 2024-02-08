import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import * as Location from 'expo-location';

export default function UserLocation() {
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
    <View >
      <Text s>
        {
          errorMsg !== null ? <Text> {errorMsg} </Text> : JSON.stringify(address)
        }
      </Text>
    </View>
  );
}
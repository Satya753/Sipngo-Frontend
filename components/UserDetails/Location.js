import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      let userId= global.d['uid']
      const locationbody = {
        user_id: userId,
        coords:JSON.stringify(location)
      }
      const requestOptions={
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(locationbody)
      }

      console.log(JSON.stringify(location) , ' this is the location')
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View >
      <Text s>{text}</Text>
    </View>
  );
}
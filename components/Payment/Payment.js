import React, { useState } from 'react';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Payment = () => {
    const route = useRoute();
    const paymentStatus = route.params?.paymentStatus
  return (
    <View style={{...styles.main, backgroundColor : paymentStatus === "SUCCESS" ? "green" : "red"}}>
        <ScrollView>
            <View style={styles.optionsWrapper}>
                <Text>PAYMENT SUCCESS</Text> 
            </View>
        </ScrollView>
    </View>
  )
}

export default Payment
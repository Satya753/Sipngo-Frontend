import React, { useState } from 'react';
import styles from './styles';

import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const Payment = () => {
    const [selected, setSelected] = useState("PhonePe");

  return (
    <View style={styles.main}>
        <ScrollView>
            <View style={styles.optionsWrapper}>
                <Text style={styles.header}>Choose payment method</Text>
                <View style={styles.paymentOptions}>
                    <View style={styles.paymentOptions_info}>
                        <RadioButton
                            value="PhonePe"
                            status={selected === "PhonePe" ? "checked" : "unchecked"}
                            onPress={() => setSelected("PhonePe")} />
                        <Text style={styles.paymentLabel}>PhonePe UPI</Text>
                    </View>
                    <Image
                        style={styles.payment_image}
                        source={require("../../static/phonepe.png")} />
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default Payment
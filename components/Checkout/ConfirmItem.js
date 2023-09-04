import { useEffect } from "react";
import React , {useState} from 'react';
import {Button , View , FlatList , Text} from 'react-native';
import {  Card} from 'react-native-paper';

import config from '../../Utils/Config'

import styles from "../Styles/payments";
const ConfirmItem = (props)=>{
    return (
        <View>
            <Card style={styles.singleitem}>
                <Card.Content>
                     <Text>{props.itemName}</Text>
                    <Text>Total Amount {props.amount}</Text>
                </Card.Content>
            </Card>
        </View>
    )
}

export default ConfirmItem;
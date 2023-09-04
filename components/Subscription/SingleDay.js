import { useEffect } from "react";
import React , {useState} from 'react';
import {Button , View , FlatList , Text} from 'react-native';
import {  Card} from 'react-native-paper';
import styles from "../Styles/substyles";

import config from '../../Utils/Config'


const SingleDay = (props)=>{
    return (
        <View style = {styles.container}>
            <Card>
                <Card.Title heading= {props.day}/>
                <Card.Content>
                     <Text>Date {props.day}</Text>
                    <Text>Status {props.status}</Text>
                </Card.Content>
            </Card>
        </View>
    )
}

export default SingleDay;
import { useEffect } from "react";
import React , {useState} from 'react';
import {Button , View , FlatList , Text} from 'react-native';
import config from '../../Utils/Config'

const SubscriptionDetails = ()=>{
    const [subData , setSubData]=useState([]);
    let userId = global.d['uid'];
    const fetchSubscription = async (id)=>{
        const resp = await fetch(`${config.flaskapi}/home/subscription?user_id=${id}`).then(res => res.json()); 
        setSubData(resp);

    }
    useEffect(()=>{
        fetchSubscription(userId)
    } , [])


    return (
        <View>
            <Text>Subscription Details</Text>
            {subData}
        </View>
    )

}

export default SubscriptionDetails;
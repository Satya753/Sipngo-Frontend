import { useEffect } from "react";
import React , {useState} from 'react';
import {Button , View , FlatList , Text} from 'react-native';
import config from '../../Utils/Config'
import SingleDay from "./SingleDay";
const SubscriptionDetails = ()=>{
    const [subData , setSubData]=useState({});
    let userId = global.d['uid'];
    const fetchSubscription = async (id)=>{
        const resp = await fetch(`${config.flaskapi}/home/subscription?user_id=${id}`).then(res => res.json()); 
        const cur = {...resp}
        setSubData(cur);
  //      console.log(subData , cur)
    }
    useEffect(()=>{
        fetchSubscription(userId)
    } , [])

    let subscription = []

    // for (sub in subData){
    //     console.log(sub);
    // }
    for (const key in subData){
        console.log(subData[key])
        subscription.push(<SingleDay day = {subData[key].order_date} status = {subData[key].status}></SingleDay>)
    }
    return (
        <View>
            <Text>Subscription Details</Text>
            {subscription}
        </View>
    )

}

export default SubscriptionDetails;
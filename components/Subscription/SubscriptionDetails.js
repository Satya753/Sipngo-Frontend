import { useEffect } from "react";
import React , {useState} from 'react';
import config from '../../Utils/Config'
import SingleDay from "./SingleDay";
import { ScrollView } from "react-native-gesture-handler";

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
    for (const key in subData){
        subscription.push(<SingleDay key={key} day={subData[key].order_date} status = {subData[key].status}/>)
    }

    return (
        <ScrollView style={{flex: 1}}>
            {subscription}
        </ScrollView>
    )

}

export default SubscriptionDetails;
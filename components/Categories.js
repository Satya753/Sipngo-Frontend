import { Text, View, StyleSheet, Image,ScrollView } from 'react-native';
import { useRoute  } from "@react-navigation/native"
import { Card } from '@rneui/themed';
import { Button } from 'react-native-paper';
import { useContext, useEffect , useState } from 'react';
import Base64Image from './Base64Image';
import GlobalContext from './GlobalContext';
import Cart from './Cart';
import { render } from 'react-dom';
import { t } from 'react-native-tailwindcss';
import config from '../Utils/Config';
import Footer from './Footer';

export default function Categories({navigation}){
  
  const route =   useRoute()
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {cartItem , setCartItem} = useContext(GlobalContext);
  const {showCart , setShowCart} = useContext(GlobalContext);
  const fetchCategory = async (id) => {
    //id = 12
    const resp = await fetch(`${config.flaskapi}/home/category?id=${id}`).then(res => res.json()); 
    setData(resp);
    setLoading(false);
  };
  //console.log(fetchCategory(route.params.titleId))
  useEffect(() =>{fetchCategory(route.params.titleId)} , [])

  const addToCart = (amount , name , id) =>{
    const curCart = {...cartItem};
    if (name in curCart){
      curCart[name].cnt+=1;
    }
    else{
      curCart[name] = {"amount":amount , "cnt":1 , "id":id};
    }

    setShowCart(showCart+1);
    setCartItem(curCart);
  }

  const removeFromCart=(amount , name)=>{
    const curCart = {...cartItem};
    curCart[name].cnt-=1;

    if (curCart[name].cnt==0){
      delete curCart[name];
    }
  
    setShowCart(showCart-1);
    setCartItem(curCart);
  }
  
  return (
    <View style={[t.hFull]}>
      <View>
      </View>
      <ScrollView>
    {data.map(item => (
    <View style={[t.h90]}>
     <Card.Title></Card.Title><Card.Divider />
     <View style={{ position: "relative", alignItems: "center" }}>
        <Base64Image base64String={item[2]} />  
      <Text>{item[0]}</Text>
      <Text>{item[1]}</Text>
      <Button onPress={()=>addToCart(item[0] , item[1] , item[3])}>Add</Button>
      {cartItem[item[1]]?.cnt>=1?<Button style={[t.p2]} onPress = {()=>removeFromCart(item[0] , item[1])}>Remove</Button>:null}
      </View> 
      </View>
    ))}
    </ScrollView>
    {Object.keys(cartItem).length>=1 ? <Footer/> : null}
    </View>
     
  )
}


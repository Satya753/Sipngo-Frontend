import { Text, View, StyleSheet, Image } from 'react-native';
import { useRoute  } from "@react-navigation/native"
import { Card } from '@rneui/themed';
import { Button } from 'react-native-paper';
import { useContext, useEffect , useState } from 'react';
import Base64Image from './Base64Image';
import GlobalContext from './GlobalContext';
import Cart from './Cart';



export default function Category(props){
  
  const route =   useRoute()
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {cartItem , setCartItem} = useContext(GlobalContext);
  const {showCart , setShowCart} = useContext(GlobalContext);
  const fetchCategory = async (id) => {
    //id = 12
    const resp = await fetch(`http://127.0.0.1:5000/home/category?id=${id}`).then(res => res.json()); 
    setData(resp);
    setLoading(false);
  };
  //console.log(fetchCategory(route.params.titleId))
  useEffect(() =>{fetchCategory(route.params.titleId)} , [])

  const addToCart = (amount , name) =>{
    console.log(cartItem);
    const curCart = cartItem;
    if (name in curCart){
      curCart[name].amount += amount;
      curCart[name].cnt+=1;
    }
    else{
      curCart[name] = {"amount":amount , "cnt":1};
    }
    console.log(curCart);
    setCartItem(curCart);
  }

  const removeFromCart=(amount , name)=>{
    const curCart = cartItem;
    curCart[name].amount-=amount;
    curCart[name].cnt-=1;

    if (curCart[name].cnt==0){
      delete curCart[name];
    }
    console.log(cartItem);
  
  }
  
  console.log(Object.keys(cartItem).length);
  
  return (
    <div>
      { Object.keys(cartItem).length!=0  ? <Cart value = {cartItem}></Cart>:null} 
  {data.map(item => (
    <div>
     <Card.Title></Card.Title><Card.Divider /><View style={{ position: "relative", alignItems: "center" }}>
       <Base64Image base64String={item[2]}></Base64Image>
      <Text>{item[0]}</Text>
      <Text>{item[1]}</Text>
      <Button onPress={()=>addToCart(item[0] , item[1])}>Add</Button>
      <Button onPress = {()=>removeFromCart(item[0] , item[1])}>Remove</Button>
      </View> 
      </div>
    ))}
    
    </div>
     
  )
}


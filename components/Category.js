import { Text, View, StyleSheet, Image } from 'react-native';
import { useRoute  } from "@react-navigation/native"
import { Card } from '@rneui/themed';
import { Button } from 'react-native-paper';
import { useEffect , useState } from 'react';
import Base64Image from './Base64Image';
import GlobalContext from './GlobalContext';



export default function Category(props){
  
  const route =   useRoute()
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItem , setCartItem] = useState(GlobalContext);
  const fetchCategory = async (id) => {
    //id = 12
    const resp = await fetch(`http://127.0.0.1:5000/home/category?id=${id}`).then(res => res.json()); 
    setData(resp);
    setLoading(false);
  };
  //console.log(fetchCategory(route.params.titleId))
  useEffect(() =>{fetchCategory(route.params.titleId)} , [])

  const updateCart = (amount , name) =>{
    if (name in cartItem ){
      cartItem[name] +=amount;
    }
    else{
      cartItem[name] = amount;
    }
    console.log(cartItem);
  }
  
  return (
    <div>
  {data.map(item => (
    <div>
     <Card.Title></Card.Title><Card.Divider /><View style={{ position: "relative", alignItems: "center" }}>
       <Base64Image base64String={item[2]}></Base64Image>
      <Text>{item[0]}</Text>
      <Text>{item[1]}</Text>
      <Button onPress={()=>updateCart(item[0] , item[1])}>Add</Button>
      <Button>Remove</Button>
      </View> 
      </div>
    ))}
    </div>
     
  )
}
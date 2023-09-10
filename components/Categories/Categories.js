import { Text, View, StyleSheet, Image,ScrollView } from 'react-native';
import { useRoute  } from "@react-navigation/native"
import { Card } from '@rneui/themed';
import { Button } from 'react-native-paper';
import { useContext, useEffect , useState } from 'react';
import Base64Image from '../Base64Image';
import GlobalContext from '../GlobalContext';
import Cart from '../Cart';
import { render } from 'react-dom';
import { t } from 'react-native-tailwindcss';
import config from '../../Utils/Config';
import Footer from './Footer';
import styles from '../Styles/categories';

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
    console.log(resp);
    setLoading(false);
  };
  //console.log(fetchCategory(route.params.titleId))
  useEffect(() =>{fetchCategory(route.params.titleId)} , [])

  const addToCart = (amount , name , id , image) =>{
    const curCart = {...cartItem};
    if (name in curCart){
      curCart[name].cnt+=1;
    }
    else{
      curCart[name] = {"amount":amount , "cnt":1 , "id":id , "image":image};

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

  console.log('from categories' , global.d)
  // #res.append([item.price , item.name ,byteimg.getBase64() , item.id])
  // 0 - price , 1- name , 2 - img , 3 - id
  return (
    <View>
      <ScrollView style = {{height:720}}>
    {data.map(item => (
    <View style={styles.container}>
     <View style={{ position: "relative", alignItems: "center" , flexDirection:'row'}}>
     <View style = {{flexDirection:'column' , position:'relative' , left:30  , width:153 , padding:3 , margin:3}}>
        <Text style = {{fontWeight:400 , fontSize:17}}>{item.name}</Text>
        <Text style = {styles.itemtext}><Text>{'\u20B9'}</Text>{item.price}</Text>
        </View>
        <View style = {{flexDirection:'column' , position:'relative' , left:90 , top:12}}>
        <Base64Image base64String={item.img} />  
     
      {
      cartItem[item.name]?.cnt?<View style = {styles.buttonViewStyle}>
                <Button onPress = {()=>removeFromCart(item.price , item.name)}><Text style={[t.textWhite , t.fontExtrabold	]}>-</Text></Button>
                <View style={[t.justifyCenter]}><Text  style={[t.textWhite , t.fontExtrabold	]}>{cartItem[item.name]?.cnt}</Text></View>
                <Button onPress={()=>addToCart(item.price , item.name , item.id, item.img)}><Text  style={[t.textWhite , t.fontExtrabold	]}>+</Text></Button>
      </View>:<Button style = {styles.addbutton}  onPress={()=>addToCart(item.price , item.name , item.id , item.img)}><Text style = {styles.buttonText}>ADD</Text></Button>
    }
      </View>
      </View> 

      </View>
    ))}
    </ScrollView>
    <View>
      <View>{Object.keys(cartItem).length>=1 ? <Footer/> : null}</View>
  </View>
    </View>
     
  )
}


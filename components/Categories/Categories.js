import { Text, View,SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute  } from "@react-navigation/native"
import { useContext, useEffect , useState } from 'react';
import Base64Image from '../Base64Image';
import GlobalContext from '../GlobalContext';
import config from '../../Utils/Config';
import Footer from './Footer';
import styles from '../Styles/categories';

export default function Categories(){
  
  const route =   useRoute()
  let headerArray = route.params.titleValue
    .split(' ')
    .map(item => {
      return item.replace(item[0], item[0].toUpperCase())
    });
  let header = headerArray.join(" ");

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

  // console.log('from categories' , global.d)
  // #res.append([item.price , item.name ,byteimg.getBase64() , item.id])
  // 0 - price , 1- name , 2 - img , 3 - id
  return (
    <View style={styles.main}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>
          {header}
        </Text>
      </View>
      <ScrollView style = {styles.scrollViewContainer}>
        {
          data.map((item,id) => (
            <View style={styles.container} key={id}>
              <View style={styles.card}>
                <View style = {styles.cardText}>
                  <Text style = {styles.cardText_name}>{item.name}</Text>
                  <Text style = {styles.cardText_price}><Text>{'\u20B9'}</Text>{item.price}</Text>
                </View>
                <View style = {styles.cardImage}>
                  <Base64Image base64String={item.img} />  
                  {
                    cartItem[item.name]?.cnt ? 
                      <View style = {styles.countContainer}>
                        <TouchableOpacity style={styles.button_decrease} onPress = {()=>removeFromCart(item.price , item.name)}>
                          <Text style={styles.button_text}>-</Text>
                        </TouchableOpacity>
                        <View style={styles.countText}>
                          <Text style={styles.button_text}>{cartItem[item.name]?.cnt}</Text>
                        </View>
                        <TouchableOpacity style={styles.button_increase} onPress={()=>addToCart(item.price , item.name , item.id, item.img)}>
                          <Text style={styles.button_text}>+</Text>
                        </TouchableOpacity>
                      </View> :
                      <TouchableOpacity style = {styles.countContainer}  onPress={()=>addToCart(item.price , item.name , item.id , item.img)}>
                        <Text style = {styles.button_text}>ADD</Text>
                      </TouchableOpacity>
                  }
                </View>
              </View>
              <Text style={{color: 'grey', marginHorizontal: 2}} ellipsizeMode="clip" numberOfLines={1}>
                &nbsp;- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - -
              </Text>
            </View>
        ))}
      </ScrollView>
      <View>
        <View>{Object.keys(cartItem).length>=1 ? <Footer/> : null}</View>
      </View>
    </View>
     
  )
}


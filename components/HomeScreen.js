import {Button , View , FlatList} from 'react-native';
import { Text} from 'react-native';
import fetch from 'node-fetch';
import { useContext, useEffect , useState } from 'react';
import Cart from './Cart';
import config from '../Utils/Config';
//let [categories , setCategories] = useState(null)
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Category from './Categories/Category';
import Footer from './Categories/Footer';
import {t} from 'react-native-tailwindcss'
import GlobalContext from './GlobalContext';
import Signout from './Authentication/Signout';
import { useNavigation } from '@react-navigation/native';
import Location from './UserDetails/Location';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const  {cartItem , setCartItem} = useContext(GlobalContext);

  const fetchCategory = async () => {
    const resp = await fetch(`${config.flaskapi}/home`); 
    const data = await resp.json();
    console.log(data)
    setData(data);
    setLoading(false);
  };
  // title={item[0]}
  // onPress =  {titleName:item[0] , titleValue :item[0]  , titleId: item[1] , image: item[2]}>
  //   <Text>{item[0]}</Text>

  useEffect(fetchCategory , []);
  //console.log(JSON.stringify(categories))
  return (
    <View>
        <Location/>
      <View  style = {[ t.pT8 , t.pB8 , t.mBAuto ]}>
      <ScrollView>
        <FlatList
        data = {data}
        numColumns={2}
        renderItem={({item}) =>  <Category Name={item[0]} Value={item[0]} Id={item[1]} Image = {item[2]}></Category>}>
    </FlatList>
    </ScrollView>
    </View>
    {Object.keys(cartItem).length>=1 ? <Footer/> : null}
    </View>
    
  );
};

export default HomeScreen;



import {Button , View} from 'react-native';
import { Text} from 'react-native';
import fetch from 'node-fetch';
import { useEffect , useState } from 'react';
import Cart from './Cart';
import config from '../Utils/Config';
//let [categories , setCategories] = useState(null)
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Category from './Category';
import Footer from './Footer';
import {t} from 'react-native-tailwindcss'
const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <View  style = {[ t.pT8 , t.pB8 , t.mBAuto ]}>
      <ScrollView>
    {data.map(item => (
      <Category Name={item[0]} Value={item[0]} Id={item[1]} Image = {item[2]}>
      </Category>
    ))}
    </ScrollView>
    </View>
    <Footer/>
    </View>
    
  );
};

export default HomeScreen;



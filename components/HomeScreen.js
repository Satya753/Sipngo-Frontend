import {Button , View , FlatList} from 'react-native';
import { Text} from 'react-native';
import fetch from 'node-fetch';
import { useContext, useEffect , useState } from 'react';
import Cart from './Cart';
import config from '../Utils/Config';
//let [categories , setCategories] = useState(null)
import Category from './Categories/Category';
import Footer from './Categories/Footer';
import {t} from 'react-native-tailwindcss'
import GlobalContext from './GlobalContext';
import { useNavigation } from '@react-navigation/native';
import Location from './UserDetails/Location';
import styles from './Styles/HomeScreenStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

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
  return (
    <SafeAreaView>
      <Location/>
      <View style={styles.listContainer}>
        {/* <ScrollView> */}
          <FlatList
            data = {data}
            numColumns={2}
            renderItem={({item}) =>  <Category Name={item.name} Value={item.name} Id={item.id} Image = {item.img}></Category>}>
          </FlatList>
        {/* </ScrollView> */}
      </View>
    {Object.keys(cartItem).length>=1 ? <Footer/> : null}
    </SafeAreaView>
    
  );
};

export default HomeScreen;



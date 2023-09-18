import {SafeAreaView, View, FlatList} from 'react-native';
import { useContext, useEffect , useState } from 'react';
import config from '../Utils/Config';
import Category from './Categories/Category';
import Footer from './Categories/Footer';
import GlobalContext from './GlobalContext';
import Location from './UserDetails/Location';
import styles from './Styles/HomeScreenStyles';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const {cartItem , setCartItem} = useContext(GlobalContext);
  const fetchCategory = async () => {
    const resp = await fetch(`${config.flaskapi}/home`); 
    const data = await resp.json();
    console.log(data)
    setData(data);
    setLoading(false);
  };

  useEffect( () => fetchCategory() ,[] )

  return (
    <SafeAreaView style={styles.main}>
      <Location/>
      <View style={styles.listContainer}>
        <FlatList
          data = {data}
          numColumns={2}
          renderItem={({item}) =>  <Category Name={item.name} Value={item.name} Id={item.id} Image = {item.img}></Category>}>
        </FlatList>
      </View>
      {Object.keys(cartItem).length>=1 ? <Footer/> : null}
    </SafeAreaView>
  );
};

export default HomeScreen;



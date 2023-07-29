import {Button , View} from 'react-native';
import { Text} from 'react-native';
import fetch from 'node-fetch';
import { useEffect , useState } from 'react';
import Cart from './Cart';
//let [categories , setCategories] = useState(null)


const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategory = async () => {
    const resp = await fetch("http://127.0.0.1:5000/home"); 
    const data = await resp.json();
    setData(data);
    setLoading(false);
    console.log(data)
  };

  useEffect(fetchCategory , []);
  //console.log(JSON.stringify(categories))
  return (
    <View>
      <Cart/>
    {data.map(item => (
      <Button
      title={item[0]}
      onPress = {()=>navigation.navigate('Category' , {titleName:item[0] , titleValue :item[0]  , titleId: item[1] , image: item[2]})}></Button>
    ))}
    </View>
    
  );
};

export default HomeScreen;



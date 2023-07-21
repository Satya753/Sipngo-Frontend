import {Button , View} from 'react-native';
import { Text} from 'react-native';
import fetch from 'node-fetch';
import { useEffect , useState } from 'react';
//let [categories , setCategories] = useState(null)


const HomeScreen = ({navigation}) => {
     const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategory = async () => {
    const resp = await fetch("http://93.188.165.63:8080"); 
    const data = await resp.json();
    setData(data);
    setLoading(false);
    console.log(data)
  };

  fetchCategory()

  //useEffect(fetchCategory , []);
  //console.log(JSON.stringify(categories))
  return (
    <View>
    {data.map(item => (
      <Button
      title={item}
      onPress = {()=>navigation.navigate('Category' , {titleValue :item , image: item})}></Button>
    ))}
    </View>
    
  );
};

export default HomeScreen;



import { Text, View, StyleSheet, Image } from 'react-native';
import { useRoute } from "@react-navigation/native"
import { Card } from '@rneui/themed';
import { Button } from 'react-native-paper';

/*
function fetchItemByCategory(item){
  
  return fetch('URL')
  .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.Items;
    })
    .catch((error) => {
      console.error(error);
    });
}
*/

export default function Category(props){
  const route =   useRoute()
  return (
    <div>
    <Card.Title>CARD WITH DIVIDER</Card.Title><Card.Divider /><View style={{ position: "relative", alignItems: "center" }}>
      <Image
        style={{ width: "100%", height: 100 }}
        resizeMode="contain"
        source={{ uri: "https://sipngo.co.in/static/items/1000072417.jpg" }} />
      <Text>{route.params.id}</Text>
      <Text>price 60</Text>
      <Button>Add</Button>
      <Button>Remove</Button>
    </View>
    </div>
     
  )
}
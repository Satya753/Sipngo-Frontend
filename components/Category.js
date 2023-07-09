import { Text, View, StyleSheet, Image } from 'react-native';



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

export default function Category(props){

  return (
    <View>

    </View>
  )
}
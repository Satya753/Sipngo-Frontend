import { Text, View, StyleSheet, Image } from 'react-native';


export default function Category(props){

  return (
    <View>
    <Text>{props.type}</Text>
    <Text>{props.timing}</Text>
    </View>
  )
}
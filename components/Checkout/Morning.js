
import { Text, View, StyleSheet, Image } from 'react-native';
import {RadioButton} from 'react-native-paper'


export default  function Morning(props){

  return (
    <View> 
      <Text>Morning</Text><RadioButton value  = "Morning"
            label = {props.label}
            status={props.label===props.slot?'checked':'unchecked'}
            onPress={()=>props.setSlot(props.slot)} 
            ></RadioButton>
    </View>
  )
}

import { Text, View, StyleSheet, Image,ScrollView , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Base64Image from './Base64Image';
import {t} from 'react-native-tailwindcss'
import { SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';



export default function Category({Name ,  Value , Id , Image}){
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.container,t.pT8 , t.pB3 ,  t.mB2 ,t.mR2 , t.mL8 ]} onPress={()=>navigation.navigate('Categories' , {titleName:Name , titleValue :Value  , titleId: Id , image: Image})}>
      <Card style = {[]}>
    <View style={styles.innerContainer}>
    <Base64Image base64String={Image} />  
      <Text style={styles.text}>{Name}</Text>
    </View>
    </Card>
  </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    padding:1
  },
  innerContainer: {
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});

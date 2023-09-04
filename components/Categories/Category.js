import { Text, View, StyleSheet, Image,ScrollView , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Base64Image from '../Base64Image';
import {t} from 'react-native-tailwindcss'
import { SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';
import styles from '../Styles/categories';


export default function Category({Name ,  Value , Id , Image}){
  const navigation = useNavigation();
  return (
    <TouchableOpacity  onPress={()=>navigation.navigate('Categories' , {titleName:Name , titleValue :Value  , titleId: Id , image: Image})}>
      <Card style = {[]}>
    <View style={styles.innerContainer}>
    <Base64Image base64String={Image} />  
      <Text style={styles.text}>{Name}</Text>
    </View>
    </Card>
  </TouchableOpacity>
  )
}

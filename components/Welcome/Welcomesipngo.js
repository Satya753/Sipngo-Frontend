import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

export default  function Welcomesipngo() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex : 1}}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>
            Welcome Sipngo
          </Text>
        </View>
        <View>
        <TouchableOpacity 
          style = {styles.button} 
          onPress={()=>navigation.navigate('Signin')}>
            <Text style={styles.buttonText}>
              Sign In
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style = {styles.button} 
          onPress={()=>navigation.navigate('Signup')}>
            <Text style={styles.buttonText}>
              Sign Up
            </Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

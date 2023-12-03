import { Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import '../../config/firebase';
import {getAuth , signOut} from 'firebase/auth';
const auth  = getAuth();
export default  function Signout() {
  // Set an initializing state while Firebase connects
  // Handle user state changes
  return (
    <View>
       <Text>Sign In</Text>
        <Button onPress = {()=>signOut(auth)} title = "Sign Out" />
    </View>
  );
}
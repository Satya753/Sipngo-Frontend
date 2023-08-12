import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Categories from './components/Categories'
import AppNavigator from './components/AppNavigator';
import GlobalState from './components/GlobalState';
import Signin from './components/Signin';
// You can import from local files
import AssetExample from './components/AssetExample';
import {initializeApp} from 'firebase/app';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import GlobalContext from './components/GlobalContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import userAuthentication from './components/userAuthentication';
import AuthStack from './components/AuthStack';
import './config/firebase';
export default function App() {
  const {user} = userAuthentication();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>
      <GlobalState>
        {user?<AppNavigator/>:<AuthStack/>}
      </GlobalState>
    </View>
    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

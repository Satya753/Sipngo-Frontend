import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Categories from './components/Categories'
import AppNavigator from './components/AppNavigator';
import GlobalState from './components/GlobalState';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import GlobalContext from './components/GlobalContext';

export default function App() {
  return (
    <View style={styles.container}>
      <GlobalState>
        <AppNavigator/>
      </GlobalState>
    </View>
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

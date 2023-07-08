import { Text, View, StyleSheet, Image } from 'react-native';

import Category from './Category';
export default  function Categories(){

  return (
    <View style = {styles.container}> 
    <Category type = {'Evening'}   timing = {'7-9 Pm'} style = {styles.container}> </Category>
    <Category type = {'Morning'}  timing = {'7-9 Am'} style = {styles.container}> </Category>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 29,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});


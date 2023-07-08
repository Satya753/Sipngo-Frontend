import {Button , View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Button
      title="Fresh Juices"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
      <Button
      title="Milk Shakes"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
     <Button
      title="Thick shake"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
     <Button
      title="Detox Juices"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
     <Button
      title="Bowls and Sandwiches"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
     <Button
      title="Hot Beverages"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
     <Button
      title="Ice Cream"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
    </View>
    
  );
};

export default HomeScreen;
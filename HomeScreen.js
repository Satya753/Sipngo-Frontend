import {Button , View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Button
      title="Fresh Juices"
      onPress={() =>
        navigation.navigate('Category', {titleValue : 'Fresh Juices'})
      }
    />
      <Button
      title="Milk Shakes"
      onPress={() =>
        navigation.navigate('Category', {titleValue: 'Milk Shakes'})
      }
    />
     <Button
      title="Thick shake"
      onPress={() =>
        navigation.navigate('Category', {titleValue: 'Thick Shake'})
      }
    />
     <Button
      title="Detox Juices"
      onPress={() =>
        navigation.navigate('Category', {titleValue: 'Detox Juices'})
      }
    />
     <Button
      title="Bowls and Sandwiches"
      onPress={() =>
        navigation.navigate('Category', {titleValue: 'Bowls and Sandwiches'})
      }
    />
     <Button
      title="Hot Beverages"
      onPress={() =>
        navigation.navigate('Category', {titleValue : 'Hot Beverages'})
      }
    />
     <Button
      title="Ice Cream"
      onPress={() =>
        navigation.navigate('Category', {titleValue: 'Ice Cream'})
      }
    />
    </View>
    
  );
};

export default HomeScreen;
import {Button , View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Button
      title="Fresh Juices"
      onPress={() =>
        navigation.navigate('Category', {titleValue : 'Fresh Juices' , id : "freshjuice"})
      }
    />
      <Button
      title="Milk Shakes"
      onPress={() =>
        navigation.navigate('Category', {titleValue: 'Milk Shakes' , id: "milkshakes"})
      }
    />
     <Button
      title="Thick shake"
      onPress={() =>
        navigation.navigate('Category', {titleValue: 'Thick Shake', id: "thickshake"})
      }
    />
     <Button
      title="Detox Juices"
      onPress={() =>
        navigation.navigate('Category', {titleValue: 'Detox Juices' , id:"detoxjuices"})
      }
    />
     <Button
      title="Bowls and Sandwiches"
      onPress={() =>
        navigation.navigate('Category', {titleValue: 'Bowls and Sandwiches' , id:'bowlssandwiches'})
      }
    />
     <Button
      title="Hot Beverages"
      onPress={() =>
        navigation.navigate('Category', {titleValue : 'Hot Beverages' ,id:"hotbeverages"})
      }
    />
     <Button
      title="Ice Cream"
      onPress={() =>
        navigation.navigate('Category', {titleValue: 'Ice Cream', id:"icecream"})
      }
    />
    </View>
    
  );
};

export default HomeScreen;
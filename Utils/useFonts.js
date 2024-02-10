import * as Font from "expo-font";

export default useFonts = async () => {
   await Font.loadAsync({
        'PoppinsRegular': require('../assets/fonts/Poppins-Regular.ttf'),
    });
};
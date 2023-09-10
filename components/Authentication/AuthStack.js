import { NavigationContainer } from "@react-navigation/native";
import Signin from "./Signin";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from './Signup'
const Stack = createStackNavigator();

export default function AuthStack(){

    return (
        <NavigationContainer>
            <Stack.Navigator>
            {/* <Stack.Screen 
                name = "Welcome Sipngo" 
                component={Welcomesipngo}
                options={{
                    title:"",
                    headerShown: false
                }}/> */}
            <Stack.Screen 
                name="Signin"   
                component={Signin} 
                options={{
                    title: "",
                    headerShown: false
                }}/>
            <Stack.Screen 
                name = "Signup" 
                component = {Signup}
                options={{
                    title: "",
                    headerShown: false
                }}/>
        </Stack.Navigator>
        </NavigationContainer>
    )

}
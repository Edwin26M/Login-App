import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from "@/auth/Login";
import {Register} from "@/auth/Register";
import {Home} from "@/auth/Home";

const Stack = createNativeStackNavigator();

export function AppNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={ { headerShown: false } }>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
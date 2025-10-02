import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../Login';
import { Register } from '../Register';

const Stack = createNativeStackNavigator();

export function AppNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={ { headerShown: false } }>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
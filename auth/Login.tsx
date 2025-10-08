import React from "react";
import {AuthForm} from "./AuthForm";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation} from "@react-navigation/native";
import {Keyboard, KeyboardAvoidingView, Platform} from "react-native";
import {useEffect} from "react";
import {Image} from "@/components/ui/image";



export function Login () {
    const navigation = useNavigation();
    const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);


    useEffect( () => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }

        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const handleLogin = ({email, password}: {email: string, password: string}) => {
        if ( email === "" || password === "" ) {
            navigation.navigate("Home" as never);
        } else {
            alert("Credenciales inválidas. Por favor, inténtelo de nuevo.");
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 10}
            enabled={isKeyboardVisible}
        >
            {
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                    <Image
                        source={require("../assets/LogoUABC.png")}
                        style={styles.logo} alt="logo"/>
                    </View>
                    <View style={{ alignItems: "stretch"}}>
                        <AuthForm mode="login" onSubmit={handleLogin}/>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Register" as never)}>
                        <Text style={styles.toggleText}>¿No tienes una cuenta? Regístrate</Text>
                    </TouchableOpacity>
                </View>
            }
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    toggleText: {
        color: "black",
        fontSize: 14,
        marginTop: 20,
        textAlign: "center",
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 400,
        height: 400,
        marginBottom: 20,
        resizeMode: 'contain',
    },
});
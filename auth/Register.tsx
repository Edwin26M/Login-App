import React  from "react";
import { AuthForm } from "./AuthForm";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Keyboard, KeyboardAvoidingView, Platform} from "react-native";
import {useEffect} from "react";

export function Register () {
    const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            });
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
    const navigation = useNavigation();

    const handleRegister = ({ email, password }: { email: string, password: string }) => {
        if (email && password) {
            // Aquí iría la lógica para registrar al usuario, por ahora simulamos éxito
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            navigation.navigate("Login" as never);
        } else {
            alert("Por favor, complete todos los campos.");
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 10}
            enabled={isKeyboardVisible}
        >
            {
                <View style={styles.container}>
                    <AuthForm mode="register" onSubmit={handleRegister} />
                    <TouchableOpacity onPress={() => navigation.navigate("Login" as never)}>
                        <Text style={styles.toggleText}>¿Ya tienes una cuenta? Inicia Sesión</Text>
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
        color: "blue",
        marginTop: 20,
        textAlign: "center",
    },
});
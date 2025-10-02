import {AuthForm} from "./AuthForm";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation} from "@react-navigation/native";

export function Login () {
    const navigation = useNavigation();

    const handleLogin = ({email, password}: {email: string, password: string}) => {
        if ( email === "" || password === "" ) {
            navigation.navigate("Home" as never);
        } else {
            alert("Credenciales inválidas. Por favor, inténtelo de nuevo.");
        }
    }

    return (
        <View style={styles.container}>
            <AuthForm mode="login" onSubmit={handleLogin} />
            <TouchableOpacity onPress={() => navigation.navigate("Register" as never)}>
                <Text style={styles.toggleText}>¿No tienes una cuenta? Regístrate</Text>
            </TouchableOpacity>
        </View>
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
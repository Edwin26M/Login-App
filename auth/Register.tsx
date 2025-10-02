import { AuthForm } from "./AuthForm";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Register () {
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
        <View style={styles.container}>
            <AuthForm mode="register" onSubmit={handleRegister} />
            <TouchableOpacity onPress={() => navigation.navigate("Login" as never)}>
                <Text style={styles.toggleText}>¿Ya tienes una cuenta? Inicia Sesión</Text>
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
import { View, StyleSheet, Text,TextInput } from "react-native";
import {ImageSelector} from "@/auth/ImageSelector";

export function Home() {
    return (
        <View style={styles.container}>

            <Text style={styles.welcomeText}>¡Bienvenido a la aplicación!</Text>
            <Text style={styles.infoText}>Has iniciado sesión correctamente.</Text>
            <TextInput
            style={ { height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20, width: '100%', paddingHorizontal: 10 } }
            placeholder="Escribe algo aquí"
            />
            <TextInput
            style={ { height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20, width: '100%', paddingHorizontal: 10 } }
            placeholder="Escribe algo más aquí"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    infoText: {
        fontSize: 16,
        color: "gray",
    },
});
import { View, StyleSheet, Text} from "react-native";

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>¡Bienvenido a la aplicación!</Text>
            <Text style={styles.infoText}>Has iniciado sesión correctamente.</Text>
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
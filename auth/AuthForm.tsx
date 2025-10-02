import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export function  AuthForm ({mode, onSubmit}: {
    mode: "login" | "register",
        onSubmit: (data: {email: string, password: string, name?: string }) => void
        }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = () => {
        if ( mode === "register" && !name ) {
            alert("Por favor ingrese su nombre.");
            return;
        }
        onSubmit({ email, password, name: mode === "register" ? name : undefined });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{mode === "login" ? "Iniciar Sesión" : "Registrarse"}</Text>
            {mode === "register" && (
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={name}
                    onChangeText={setName}
                />
            )}
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title={mode === "login" ? "Iniciar Sesión" : "Registrarse"} onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
});
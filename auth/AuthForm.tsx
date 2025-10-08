import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { Spinner } from "@gluestack-ui/themed";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";



 interface SubmitButtonProps {
    isLoading: boolean;
    onPress: () => void;
    title: string;
}

export function SubmitButton({ isLoading, onPress, title }: SubmitButtonProps) {
    return (
        <TouchableOpacity style={styles.Button} onPress={onPress} disabled={isLoading}>
            {isLoading ? <Spinner /> : <Text style={{ color: "black", fontWeight: "bold" }}>{title}</Text>}
        </TouchableOpacity>
    );
}




export function  AuthForm ({mode, onSubmit}: {
    mode: "login" | "register",
    onSubmit: (data: {email: string, password: string, name?: string }) => void
}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


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
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Contraseña"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}
                                      style={{ position: "absolute", right: 10, top: 10 }}>
                        {showPassword ? (
                            <EyeIcon width={20} height={20} />
                        ) : (
                            <EyeOffIcon width={20} height={20}/>
                        )}
                    </TouchableOpacity>
                </View>
                {mode === "register" && (
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Confirmar Contraseña"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showConfirmPassword}
                        />
                        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                          style={{ position: "absolute", right: 10, top: 10 }}>
                            {showConfirmPassword ? (
                                <EyeIcon width={20} height={20} />
                            ) : (
                                <EyeOffIcon width={20} height={20} />
                            )}
                        </TouchableOpacity>
                    </View>
                )}
                <SubmitButton
                    isLoading={false}
                    onPress={ handleSubmit }
                    title={ mode === "login" ? "Iniciar Sesión" : "Registrarse" }
                />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
        alignItems: 'stretch'
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "black"
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    inputWrapper: { position: "relative"
    },
    inputField: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        paddingRight: 40, // Espacio para el icono
    },
    Button: {
        borderRadius: 5,
        backgroundColor: "#ADD8E6",
        padding: 10,
        alignItems: "center",
        marginTop: 10,
        height: 40,
        justifyContent: "center"
    }
});
import React, { use, useState } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";

import { useTheme } from '../contexts/ThemeContext'

export default function LoginScreen({ navigation }: any) {
    const { theme, toggleTheme } = useTheme();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async () => {
        try {
            console.log('OK')
        } catch (err: any) {
            setError(err)
        }
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={{ color: theme.colors.text }}>Email</Text>
            <TextInput
                style={[styles.input, { color: theme.colors.text }]}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <Text style={{ color: theme.colors.text }}>Senha</Text>
            <TextInput
                style={[styles.input, { color: theme.colors.text }]}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            {error ? <Text style={styles.errTxt}>{error}</Text> : null}
            <Button title="Entrar" onPress={handleLogin} color={theme.colors.primary}/>
            <Button title="Registrar" onPress={() => navigation.navigate('Register')} color={theme.colors.primary}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        gap: 10,
    },

    input: {
        borderWidth: 1,
        borderBottomWidth: 3,
        borderColor: '#8706d4',
        padding: 5,
        marginBottom: 12,
        borderRadius: 4,
    },

    errTxt: {
        padding: 20,
        color: 'red',
        backgroundColor: '#fd080875',
    }
})
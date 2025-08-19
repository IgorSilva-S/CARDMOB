import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegisterScreen from "./RegisterScreen";

import { useTheme } from '../contexts/ThemeContext'

function HomeScreen({ navigation }: any) {
    const { theme, toggleTheme } = useTheme();
    return (
        <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
            <Text style={{ color: theme.colors.text, marginBottom: theme.spacing(1) }}>
                Home Screen
            </Text>
            <Button title="Trocar Tema" color={theme.colors.primary} onPress={toggleTheme}/>
            <Button title="Ir para Detalhes" onPress={() => {
                navigation.navigate('Details')
            }}/>
            <Button title="Fazer login" color={theme.colors.primary} onPress={() => navigation.navigate('Login')}/>
        </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
})
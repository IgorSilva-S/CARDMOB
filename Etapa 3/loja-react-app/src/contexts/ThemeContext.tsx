import React, { createContext, useContext, useState, ReactNode } from "react";
import { Appearance, ColorSchemeName } from "react-native";

// Definir tema
const lightTheme = {
    colors: {
        background: '#f0f8ff',
        text: '#191919',
        primary: '#6729ccff',
    },
    spacing: (value: number) => value * 8
};

const darkTheme = {
    colors: {
        background: '#191919',
        text: "#f0f8ff",
        primary: '#bc6bffff',
    },
    spacing: (value: number) => value * 8
}

type Theme = typeof lightTheme;

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: lightTheme,
    toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const colorScheme = Appearance.getColorScheme();
    const [mode, setMode] = useState<ColorSchemeName>(colorScheme || 'light');

    const toggleTheme = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    const theme = mode === 'light' ? lightTheme : darkTheme

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
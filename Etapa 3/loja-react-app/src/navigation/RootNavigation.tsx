import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList, TabParamsList } from "./types";

import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/loginScreen";
// import DetailsScreen from "../screens/DetailsScreen"
// import SettingsScreen from "../screens/SettingsScreen"

const AppStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamsList>();

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={HomeScreen} />
            <Tab.Screen name="Register" component={RegisterScreen} />
        </Tab.Navigator>
    )
}

function AppNavigator() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
            <AppStack.Screen name="Details" component={HomeScreen} options={{ title: 'Detalhes' }} />
            <AppStack.Screen name="Login" component={LoginScreen} options={{ title: 'Fazer login' }}/>
        </AppStack.Navigator>
    )
}

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    )
}
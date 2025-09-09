import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { RootStackParamList, TabParamsList } from './types';

// Telas do app - área não logada
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
// importar depois que implementar: DetailsScreen, SettingsScreen
import CatalogScreen from '../screens/catalog/CatalogScreen';

const AppStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamsList>();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Catalog') {
                        iconName = focused ? 'tags' : 'tags'
                    }
                    return <FontAwesome name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: '#8706d4',
                tabBarInactiveTintColor: 'grey',
                headerShown: true,
            })}
        >
            <Tab.Screen name="Catalog" component={CatalogScreen} options={{title: 'Catálogo'}}/>
            <Tab.Screen name="Settings" component={HomeScreen} />
            <Tab.Screen name="Register" component={RegisterScreen} />
        </Tab.Navigator>
    );
}

function StackNavigator() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="Tabs"
                component={TabNavigator}
                options={{ headerShown: false }}
            />

            <AppStack.Screen
                name="Details"
                component={HomeScreen}
                options={{ title: 'Details' }}
            />
            <AppStack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: 'Acessar' }}
            />
        </AppStack.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <StackNavigator />
    );
}
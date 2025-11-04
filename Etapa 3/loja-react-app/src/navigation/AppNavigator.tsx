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
import CartScreen from '../screens/cart/CartScreen';

const AppStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamsList>();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: keyof typeof FontAwesome.glyphMap = 'question';;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'gears' : 'gears'
                    } else if (route.name === 'Register') {
                        iconName = focused ? 'user-plus' : 'user-plus'
                    } else if (route.name === 'Catalog') {
                        iconName = focused ? 'tags' : 'tags'
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'shopping-cart' : 'shopping-cart'
                    }
                    return <FontAwesome name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: '#8706d4',
                tabBarInactiveTintColor: 'grey',
                headerShown: true,
            })}
        >

            <Tab.Screen name="Catalog" component={CatalogScreen} options={{ title: 'Catálogo' }} />
            <Tab.Screen name="Cart" component={CartScreen} options={{title: 'Seu Carrinho', headerShown: true}}/>
            <Tab.Screen name="Settings" component={HomeScreen} />
            <Tab.Screen
              name="Register"
              component={RegisterScreen}
              options={{title: "Cadastrar", headerShown: true}} // novo
            />
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
import { NavigatorScreenParams } from "@react-navigation/native";

export type TabParamsList = {
    Home: undefined,
    Settings: undefined,
    Register: undefined,
    Catalog: undefined,
    Cart: undefined,
}

export type RootStackParamList = {
    Tabs: NavigatorScreenParams<TabParamsList>;
    Details: { itemId: number },
    Login: undefined,
    Checkout: undefined
}

export type AuthTabParamList = {
    Home: undefined;
    Settings: undefined;
}

export type AuthStackParamList = {
    Tabs: NavigatorScreenParams<AuthTabParamList>;
    Details: { itemId: number },
    Checkout: undefined
}
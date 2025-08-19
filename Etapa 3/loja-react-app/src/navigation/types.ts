import { NavigatorScreenParams } from "@react-navigation/native";

export type TabParamsList = {
    Home: undefined,
    Settings: undefined,
    Register: undefined
}

export type RootStackParamList = {
    Tabs: NavigatorScreenParams<TabParamsList>;
    Details: { itemId: number },
    Login: undefined
}
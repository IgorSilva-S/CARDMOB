import { NavigatorScreenParams } from "@react-navigation/native";

export type TabParamsList = {
    Home: undefined,
    Settings: undefined,
}

export type RootStackParamList = {
    Tabs: NavigatorScreenParams<TabParamsList>;
    Details: { itemId: number }
}
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";

    const theme = {
        light: {
            backgroundColor: "#fff",
            headerTintColor: "#25292e",
            tabBarActiveTintColor: "#2870BD",
        },
        dark: {
            backgroundColor: "#25292e",
            headerTintColor: "#fff",
            tabBarActiveTintColor: "#ffd33d",
        },
    };

    const currentTheme = isDark ? theme.dark : theme.light;

    return (
        <Tabs
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: currentTheme.backgroundColor,
                    height: 60,
                },
                headerShadowVisible: false,
                headerTintColor: currentTheme.headerTintColor,
                tabBarActiveTintColor: currentTheme.tabBarActiveTintColor,
                tabBarStyle: {
                    backgroundColor: currentTheme.backgroundColor,
                    paddingBottom: 0,
                    height: 50,
                    borderTopWidth: 1,
                    borderTopColor: "#ccc",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "home-sharp" : "home-outline"}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={
                                focused
                                    ? "information-circle"
                                    : "information-circle-outline"
                            }
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "person" : "person-outline"}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

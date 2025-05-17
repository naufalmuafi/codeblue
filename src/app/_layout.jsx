import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <SafeAreaView
                className="flex-1 bg-white dark:bg-gray-900"
                edges={["bottom", "top"]}
            >
                <Stack
                    screenOptions={{
                        headerShown: false,
                        contentStyle: { backgroundColor: "#ffffff" },
                    }}
                >
                    <StatusBar style="auto" />
                </Stack>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

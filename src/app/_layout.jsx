import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1" edges={["top", "bottom"]}>
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="(tabs)" />
                </Stack>
                <StatusBar style="auto" />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

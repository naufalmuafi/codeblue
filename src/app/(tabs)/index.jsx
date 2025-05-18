import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white dark:bg-[#25292e]">
            <Text className="text-base dark:text-white">
                This is the home page!
            </Text>
            <Link href="/about" className="text-xl underline dark:text-white">
                Go to About screen
            </Link>
        </View>
    );
}

import { View, Text } from "react-native";

export default function About() {
    return (
        <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
            <Text className="text-lg dark:text-white">
                This is the about page!
            </Text>
        </View>
    );
}

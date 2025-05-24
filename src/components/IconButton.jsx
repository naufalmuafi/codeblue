import { Text, Pressable, useColorScheme } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function IconButton({ icon, label, onPress = () => {} }) {
    const colorLight = {
        icon: "#25292e",
    };
    const colorDark = {
        icon: "#fff",
    };

    const scheme = useColorScheme();
    const colors = scheme === "dark" ? colorDark : colorLight;

    return (
        <Pressable className="justify-center items-center" onPress={onPress}>
            <MaterialIcons name={icon} size={24} color={colors.icon} />
            <Text className="mt-[12px] text-[#25292e] dark:text-white">
                {label}
            </Text>
        </Pressable>
    );
}

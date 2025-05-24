import { View, Pressable, useColorScheme } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function CircleButton({ onPress = () => {} }) {
    const colorLight = {
        border: "#ffd33d",
        background: "#25292e",
        icon: "#fff",
    };
    const colorDark = {
        border: "#ffd33d",
        background: "#fff",
        icon: "#25292e",
    };

    const scheme = useColorScheme();
    const colors = scheme === "dark" ? colorDark : colorLight;

    return (
        <View
            className="w-[84px] h-[84px] mx-[60px] rounded-full p-2"
            style={{ borderWidth: 2, borderColor: colors.border }}
        >
            <Pressable
                className="flex-1 justify-center items-center rounded-full"
                style={{ backgroundColor: colors.background }}
                onPress={onPress}
            >
                <MaterialIcons name="add" size={38} color={colors.icon} />
            </Pressable>
        </View>
    );
}

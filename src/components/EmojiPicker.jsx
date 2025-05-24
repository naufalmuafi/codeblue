import { Modal, View, Text, Pressable, useColorScheme } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function EmojiPicker({ isVisible, onClose, children }) {
    const colorLight = {
        icon: "#25292e",
    };
    const colorDark = {
        icon: "#fff",
    };

    const scheme = useColorScheme();
    const colors = scheme === "dark" ? colorDark : colorLight;

    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={isVisible}>
                <View className="w-full h-1/4 bg-white rounded-tr-3xl rounded-tl-3xl absolute bottom-0">
                    <View className="h-12 bg-slate-200 rounded-tr-2xl rounded-tl-2xl px-10 flex flex-row items-center justify-between">
                        <Text className="text-lg">Choose a Sticker</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons
                                name="close"
                                color={colors.icon}
                                size={22}
                            />
                        </Pressable>
                    </View>
                    {children}
                </View>
            </Modal>
        </View>
    );
}

import { useState } from "react";
import { FlatList, Platform, Pressable } from "react-native";
import { Image } from "expo-image";

export default function EmojiList({ onSelect, onCloseModal }) {
    const [emoji] = useState([
        require("../../assets/images/emoji1.png"),
        require("../../assets/images/emoji2.png"),
        require("../../assets/images/emoji3.png"),
        require("../../assets/images/emoji4.png"),
        require("../../assets/images/emoji5.png"),
        require("../../assets/images/emoji6.png"),
    ]);

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === "web"}
            data={emoji}
            contentContainerStyle={{
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                paddingHorizontal: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
            renderItem={({ item, index }) => (
                <Pressable
                    onPress={() => {
                        onSelect(item);
                        onCloseModal();
                    }}
                >
                    <Image
                        source={item}
                        key={index}
                        style={{
                            width: 100,
                            height: 100,
                            marginRight: 20,
                        }}
                    />
                </Pressable>
            )}
        />
    );
}

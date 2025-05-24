import { View } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import Button from "../../components/Button";
import ImageViewer from "../../components/ImageViewer";
import CircleButton from "../../components/CircleButton";
import IconButton from "../../components/IconButton";
import EmojiPicker from "../../components/EmojiPicker";
import EmojiList from "../../components/EmojiList";

import PlaceholderImage from "../../../assets/images/background-image.png";

export default function App() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showAppOptions, setShowAppOptions] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pickedEmoji, setPickedEmoji] = useState(null);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setShowAppOptions(true);
        } else {
            alert("You did not select any image.");
        }
    };

    const onReset = () => {
        setShowAppOptions(false);
    };

    const onAddSticker = () => {
        setIsModalVisible(true);
    };

    const onModalClose = () => {
        setIsModalVisible(false);
    };

    const onSaveImageAsync = async () => {};

    return (
        <View className="flex-1 items-center bg-white dark:bg-[#25292e]">
            <View className="flex-1 py-7">
                <ImageViewer
                    imgSource={PlaceholderImage}
                    selectedImage={selectedImage}
                />
            </View>

            {showAppOptions ? (
                <View className="absolute bottom-12">
                    <View className="flex flex-row items-center">
                        <IconButton
                            icon="refresh"
                            label="Reset"
                            onPress={onReset}
                        />
                        <CircleButton onPress={onAddSticker} />
                        <IconButton
                            icon="save-alt"
                            label="Save"
                            onPress={onSaveImageAsync}
                        />
                    </View>
                </View>
            ) : (
                <View className="flex items-center my-3">
                    <Button
                        label="Choose a photo"
                        theme="primary"
                        onPress={pickImageAsync}
                    />
                    <Button
                        label="Use this photo"
                        onPress={() => setShowAppOptions(true)}
                    />
                </View>
            )}

            <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
                <EmojiList
                    onSelect={setPickedEmoji}
                    onCloseModal={onModalClose}
                />
            </EmojiPicker>
        </View>
    );
}

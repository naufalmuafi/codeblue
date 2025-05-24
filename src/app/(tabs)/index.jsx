import { View } from "react-native";
import ImageViewer from "../../components/ImageViewer";
import Button from "../../components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

import PlaceholderImage from "../../../assets/images/background-image.png";

export default function App() {
    const [selectedImage, setSelectedImage] = useState(null);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        } else {
            alert("You did not select any image.");
        }
    };

    return (
        <View className="flex-1 items-center bg-white dark:bg-[#25292e]">
            <View className="flex-1 py-7">
                <ImageViewer
                    imgSource={PlaceholderImage}
                    selectedImage={selectedImage}
                />
            </View>

            <View className="flex items-center my-3">
                <Button
                    label="Choose a photo"
                    theme="primary"
                    onPress={pickImageAsync}
                />
                <Button label="Use this photo" />
            </View>
        </View>
    );
}

import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export default function ImageViewer({ imgSource, selectedImage }) {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
    return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});

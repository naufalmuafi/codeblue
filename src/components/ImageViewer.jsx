import { Image } from "expo-image";

export default function ImageViewer({ imgSource, selectedImage }) {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
    return (
        <Image
            source={imageSource}
            className="w-[320px] h-[440px] rounded-[18px]"
        />
    );
}

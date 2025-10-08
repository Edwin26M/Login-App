import React from "react";
import ImagePicker from 'react-native-image-crop-picker';
import { useState} from "react";
import { View, Button, Image } from "react-native";

export function ImageSelector () {
    const [image, setImage] = useState<string | null>(null);

    const selectImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path);
        }).catch(error => {
            console.log("Error al seleccionar la imagen: ", error);
        });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Seleccionar Imagen" onPress={selectImage} />
            {image && (
                <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200, marginTop: 20 }}
                />

            )}
        </View>
    );
}
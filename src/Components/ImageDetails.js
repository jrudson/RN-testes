import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ ImageSource, title, score }) => {
    return (
        <View>
            <Image source={ImageSource} />
            <Text>{title}</Text>
            <Text>Image score - {score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ImageDetail;
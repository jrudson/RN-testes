import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../Components/ImageDetails";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title='Forest' 
                ImageSource={require('../../assets/forest.jpg')} 
                score={9}
            />

            <ImageDetail 
                title='Beach' 
                ImageSource={require('../../assets/beach.jpg')} 
                score={7}
            />

            <ImageDetail 
                title='Mountain' 
                ImageSource={require('../../assets/mountain.jpg')} 
                score={4}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default ImageScreen;

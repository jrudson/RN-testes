import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {

    const [password, setPassword] = useState('');

    return (
        <View>
            <TextInput 
                placeholder="Enter Password..." 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            <Text />
            {password.length < 4 ? <Text>Password must be 4 characters</Text> : <Text>My name is {password}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;

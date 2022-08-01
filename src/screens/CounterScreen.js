import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);


    return (
        <View>
            <Button 
                title="Increase"
                onPress={() => {
                    // counter++;
                    // console.log(counter);
                    setCounter(counter + 1);
                }}
            />
            <Button 
                title="Decrease"
                onPress={() => {
                    // if(counter > 0) counter--;
                    // console.log(counter);
                    setCounter(counter - 1);
                }}
            />
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default CounterScreen;

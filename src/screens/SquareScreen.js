import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../Components/ColorCounter";
import { Button } from "react-native-elements";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number };
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15, || -15 }

    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color="Red"
            />

            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                color="Blue"
            />

            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                color="Green"
            />

            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
                }}
            />
            <View style={styles.viewInfo}>
                <View>
                    <Text>Red: {state.red}</Text>
                    <Text>Blue: {state.blue}</Text>
                    <Text>Green: {state.green}</Text>
                </View>
                <Button 
                    title="Preto" 
                    style={styles.botao} 
                    onPress={() => {
                            state.red = 0
                            state.blue = 0
                            state.green = 0
                            dispatch({ colorToChange: 'red', amount: 0 })
                        }
                    }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewInfo: {
        padding: 20,
        backgroundColor: '#CCC',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    botao: {
        borderStartColor: 'black'
    }
});

export default SquareScreen;

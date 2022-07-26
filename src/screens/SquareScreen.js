import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../Components/ColorCounter";
import { Button } from "react-native-elements";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number };
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15, || -15 }

    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ?
            state
            : { ...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ?
            state
            : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ?
            state
            : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
    const { red, blue, green } = state;

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
                color="Red"
            />

            <ColorCounter
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
                color="Blue"
            />

            <ColorCounter
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
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
                            dispatch({ type: 'red', payload: 0 })
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

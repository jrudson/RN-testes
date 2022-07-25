import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>São Paulo FC</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title='Go to Components Demo'
      />
      <Button 
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
});

export default HomeScreen;

// "Navigate" é a função que podemos usar para mudar o conteúdo sendo exibido na tela
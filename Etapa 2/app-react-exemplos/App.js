import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hellow React Native App!</Text>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={{width: 200, height: 200}}
      />
      <StatusBar style="auto" />
      <Text style={styles.title}>Valor do contador é {counter}</Text>

      <View style={styles.buttonContainer}>
      <Button title='Diminuir o contador' onPress={decrementCounter} />
        <Button title='Aumentar o contador' onPress={incrementCounter} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 5,
  }
});

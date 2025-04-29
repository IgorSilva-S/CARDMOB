import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0)

  // CRUD Memória
  const [items, setItems] = useState([])
  const [text, setText] = useState('')
  const [editItemId, setEditItemId] = useState(null)
  const [editItemText, setEditItemText] = useState('')

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    setCounter(counter - 1)
  }

  const addItem = () => {
    if (text.trim === '') {
      return
    }
    const newItem = {
      id: Math.random().toString(),
      text: text.trim()
    }
    setItems([ ...items, newItem])
    setText('')
    console.log(items)
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder='Insira algum texto'
      />
      <Button 
      title='Adicione esse texto'
      onPress={addItem}
      />
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

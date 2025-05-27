import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, FlatList } from 'react-native';

//Indicar endereço backend
const BASE_URL = 'http://10.81.205.26:3000';

export default function App() {
  const [counter, setCounter] = useState(0)

  // CRUD Memória
  const [items, setItems] = useState([])
  const [text, setText] = useState('')
  const [editItemId, setEditItemId] = useState(null)
  const [editItemText, setEditItemText] = useState('')
  // Loading...
  const [loading, setLoading] = useState(false)

  //Search all
  const fetchItems = async () => {
    setLoading(true)
    try {

    } catch {
       
    } finally {
      
    }
  }

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    setCounter(counter - 1)
  }

  // Create
  const addItem = () => {
    if (text.trim === '') {
      return
    }
    const newItem = {
      id: Math.random().toString(),
      text: text.trim()
    }
    setItems([...items, newItem])
    setText('')
  }

  // Update
  const updateItem = (id) => {
    setItems(items.map((item) => {
      if (item.id === id) {
        return { ...item, text: editItemText }
      }
      return item;
    }))
    setEditItemId(null);
    setEditItemText('')
  }

  // Delete
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  // Read
  const renderItem = ({ item }) => {
    if (item.id != editItemId) {
      return (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.text}</Text>
          <View style={styles.button}>
            <Button title="Editar Item" onPress={() => { setEditItemId(item.id); setEditItemText(item.text) }} color={'#8706d4'} />
            <Button title="Deletar Item" onPress={() => deleteItem(item.id)} color={'#8706d4'} />
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.item}>
          <TextInput 
            style={styles.editInput}
            onChangeText={setEditItemText}
            value={editItemText}
            autoFocus
          />

          <Button 
            title="Atualizar"
            onPress={() => updateItem(item.id)}
            color={'#8706d4'}
          />
        </View>
      )
    }
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
        color={'#8706d4'}
      />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <Text style={styles.title}>Hellow React Native App!</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={{ width: 200, height: 200 }}
      />
      <StatusBar style="auto" />
      <Text style={styles.title}>Valor do contador é {counter}</Text>

      <View style={styles.buttonContainer}>
        <Button title='Diminuir o contador' onPress={decrementCounter} color={'#8706d4'} />
        <Button title='Aumentar o contador' onPress={incrementCounter} color={'#8706d4'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50
  },

  title: {
    fontSize: 28,
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 5,
  },

  input: {
    height: 40,
    borderBottomColor: '#8706d4',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  list: {
    marginTop: 20,
    overflow:  'scroll',
    height: 'auto',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f2ff',
    borderRadius: 5,
    gap: 5,
 },
 itemText: {
  flex: 1,
  marginRight: 10,
 },
 button: {
  flexDirection: 'row',
  gap: 5,
 },
 editInput: {
  flex: 1,
  height: 40,
  borderBottomColor: '#8706d4',
  borderBottomWidth: 1,
  marginBottom: 10,
  paddingHorizontal: 10,
}
});

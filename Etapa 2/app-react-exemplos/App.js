import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme, StyleSheet, Text, View, Button, Image, TextInput, FlatList, Alert } from 'react-native';

//Indicar endereço backend
const BASE_URL = 'http://10.81.205.26:5000';

export default function App() {

  const [counter, setCounter] = useState(0)

  // CRUD Memória
  const [items, setItems] = useState([])
  const [text, setText] = useState('')
  const [desc, setDesc] = useState('')
  const [value, setValue] = useState('')
  const [editItemId, setEditItemId] = useState(null)
  const [editItemText, setEditItemText] = useState('')
  const [editDesc, setEditDesc] = useState('')
  const [editValue, setEditValue] = useState(0)
  // Loading...
  const [loading, setLoading] = useState(false)

  //Search all
  const fetchItems = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/api/catalog`)
      const data = await response.json()
      setItems(data.catalog)
    } catch (err) {
      console.error('Error fetching items:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  // Create
  const addItem = async () => {
    if (text.trim === '') {
      return
    }

    try {
      const response = await fetch(`${BASE_URL}/api/catalog`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: text.trim(), description: desc.trim(), price: value.trim() })
      })

      if (response.ok) {
        await fetchItems();
        setText('')
        setDesc('')
        setValue('')
      } else {
        console.error("Erro ao adicionar texto", response.status)

      }
    } catch (err) {
      console.error("Erro ao adicionar texto", err)
      return
    }
  }

  // Update
  const updateItem = async (id) => {
    try {
      let floatVal = parseFloat(editValue)
      const response = await fetch(`${BASE_URL}/api/catalog/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: editItemText, description: editDesc, price: floatVal })
      })

      if (response.ok) {
        await fetchItems()
        setEditItemId(null)
        setEditItemText('')
        setEditDesc('')
        setEditValue(0)
      } else {
        console.error('Failed to update item', response.status)
      }
    } catch (err) {
      console.error('Error updating item', err)
    }
  }

  // Delete
  const deleteItem = (id) => {
    Alert.alert(
      "Confirmar Exclusão",
      "Você realmente quer apagar esse item?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sim, apagar",
          onPress: async () => {
            try {
              const response = await fetch(`${BASE_URL}/api/catalog/${id}`, {
                method: 'DELETE',
              });
              if (response.ok) {
                await fetchItems(); // Atualiza a lista de itens após excluir
              } else {
                console.error("Erro ao excluir item:", response.statusText);
              }
            } catch (error) {
              console.error("Erro ao excluir item:", error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  // Read
  const renderItem = ({ item }) => {
    if (item.id != editItemId) {
      return (
        <View style={styles.item}>
          <View>
            <Image
              source={{ uri: item.image}}
              style={{width: 200, height: 200, borderRadius: 8}}
            />
            <Text style={{fontSize: 25, marginVertical: 10,}}>{item.name}</Text>
            <Text style={{fontSize: 20, marginVertical: 10,}}>{item.description}</Text>
            <Text style={{fontSize: 20, marginVertical: 10,}}>R$ {item.price}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Editar Item" onPress={() => { setEditItemId(item.id); setEditItemText(item.name); setEditDesc(item.description); setEditValue(item.value) }} color={'#8706d4'} />
              <Button title="Deletar Item" onPress={() => deleteItem(item.id)} color={'#DB7093'} />
            </View>
          </View>
        </View>
      )
    } else {
      console.log(item)
      return (
        <View style={styles.item}>
          <View>
            <TextInput
              style={styles.editInput}
              onChangeText={setEditItemText}
              value={editItemText}
              placeholder='Item'
              autoFocus
            />
            <TextInput
              style={styles.editInput}
              value={editDesc}
              onChangeText={setEditDesc}
              placeholder='Descrição'
            />
            <TextInput
              style={styles.editInput}
              value={editValue}
              onChangeText={setEditValue}
              placeholder='Preço'
              keyboardType='numeric'
            />

            <Button
              title="Atualizar"
              onPress={() => updateItem(item.id)}
              color={'#8706d4'}
            />
          </View>
        </View>
      )
    }
  }

  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme({ sourceColor: '#573f83' });

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
      <View style={styles.inpContainer}>
        <TextInput
          style={styles.nameInp}
          value={text}
          onChangeText={setText}
          placeholder='Insira o item da compra'
        />
        <TextInput
          style={styles.nameInp}
          value={desc}
          onChangeText={setDesc}
          placeholder='Descrição'
        />
        <TextInput
          style={styles.nameInp}
          value={value}
          onChangeText={setValue}
          placeholder='Preço'
          keyboardType='numeric'
        />
      </View>
      <Button
        title='Adicione esse item'
        onPress={addItem}
        color={'#8706d4'}
      />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 10,
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
    overflow: 'scroll',
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
  },
  editQuantInput: {
    height: 40,
    width: 100,
    borderBottomColor: '#8706d4',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inpContainer: {
    flexDirection: 'column',
  },
  nameInp: {
    height: 40,
    borderBottomColor: '#8706d4',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

});

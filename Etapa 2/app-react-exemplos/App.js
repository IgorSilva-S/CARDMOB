import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, FlatList, Alert } from 'react-native';

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
      const response = await fetch(`${BASE_URL}/items`)
      const data = await response.json()
      console.log(JSON.stringify(data))
      setItems(data)
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
      const response = await fetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text.trim() })
      })

      if (response.ok) {
        await fetchItems();
        setText('')
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
      const response = await fetch(`${BASE_URL}/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: editItemText})
      })

      if (response.ok) {
        await fetchItems()
        setEditItemId(null)
        setEditItemText('')
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
                            const response = await fetch(`${BASE_URL}/items/${id}`, {
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

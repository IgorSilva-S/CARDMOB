import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, FlatList } from 'react-native';

import List from './components/list'

export default function App() {

  return (
    <View style={styles.container}>
      <List/>
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

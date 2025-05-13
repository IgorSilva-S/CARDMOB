import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, FlatList } from 'react-native';

import List from './components/list'

export default function App() {

  return (
    <View style={styles.container}>
      <List />
      <View style={styles.redbox}></View>
      <View style={styles.greenbox}></View>
      <View style={styles.bluebox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
    height: '100%',
    paddingTop: 50,
    paddingBottom: 50,
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 8,
  },
  greenbox: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderRadius: 8,
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 8,
  },
});

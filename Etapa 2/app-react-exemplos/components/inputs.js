import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

class Inputs extends Component {
  
  state = {
    email: '',
    password: '',
  }
  handleEmail = (text) => {
    this.setState({ email: text });
  }
  handlePassword = (text) => {
    this.setState({ password: text });
  }
  login = (email, pass) => {
    alert(`email: ${email} password: ${pass}`);
  }
  
  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid={'transparent'}
          placeholder="Email"
          autoCapitalize='none'
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid={'transparent'}
          placeholder="Password"
          // placeholderTextColor={'#9a73ef'}
          autoCapitalize='none'
          secureTextEntry={true}
          onChangeText={this.handlePassword}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => this.login(
              this.state.email, 
              this.state.password
            )
          }
          ></TouchableOpacity>
          <Text style={styles.submitButtonText}>Submit</Text>
      </View>
    )
  }
}

export default Inputs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
    backgroundColor: '#ffe4c4',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10
  },
  submitButton: {
    backgroundColor: '#ffa07a',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText:{
    color:'white',
    textAlign:'center'
  }
});
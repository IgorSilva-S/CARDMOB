import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class List extends Component {
    state = {
        names: [
            {id: 0, name: 'Ben'},
            {id: 1, name: 'Susan'},
            {id: 2, name: 'Roberth'},
            {id: 3, name: 'Charles'}
        ]
    }

    alertItemName = (item) => {
        alert(item.name)
    }

    render() {
        return (
            <View>
                <Text style={styles.txt}>
                    Lista de itens "Clicáveis"
                </Text>
                {
                    this.state.names.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => this.alertItemName(item)}
                            style={styles.container}
                        >
                            <Text style={styles.btnTxt}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

export default List;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#8706d4',
        alignItems: 'center'
    },
    txt: {
        color: '#4f603c'
    },
    btnTxt: {
        color: 'aliceblue'
    }
})
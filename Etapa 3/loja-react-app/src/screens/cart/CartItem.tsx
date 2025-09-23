import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const CartItem = ({ item }: any) => {
    const handleRemove = () => {
        console.log('Exclusão de produto')
    }
    const handleAdd = () => {
        console.log('Adição de produto')
    }
    const handleExclusion = () => {
        console.log('Remoção total de produto')
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.quantity}>
                    <Text style={styles.price}>R$ {(item.price * item.quantity).toFixed(2)}</Text>
                    <TouchableOpacity onPress={() => handleRemove()} style={styles.fButton}>
                        <Text style={styles.fbTxt}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.qValue}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => handleAdd()} style={styles.fButton}>
                        <Text style={styles.fbTxt}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleExclusion()} style={styles.fButton}>
                        <FontAwesome name="trash-o" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CartItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    image: {
        width: '50%',
        height: 100,
        borderRadius: 8,
        borderColor: '#ddd'
    },
    name: {},
    quantity: {},
    price: {},
    fButton: {},
    fbTxt: {},
    qValue: {}
})
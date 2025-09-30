import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';

import CartItem from './CartItem';

import { useShop } from '../../contexts/ShopContext';

const CartScreen = ({ navigation }: any) => {
    const { cartItems } = useShop();

    const renderItem = ({ item }: any) => (
        <CartItem item={item} />
    );

    const handleCheckout = () => {
        console.log('Concluindo a compra')
    }

    return (
        <View style={styles.container}>
            {cartItems.length === 0 ? (
                <View>
                    <Text style={styles.empty}>Seu Carrinho está vazio!</Text>
                    <Button title='Voltar para o Menu' onPress={() => navigation.navigate('Catalog')} />
                </View>
            ) : (
                <>
                    <View>
                        <Text>Carrinho de compras</Text>
                        <FlatList
                            data={cartItems}
                            renderItem={renderItem}
                            keyExtractor={(item: any) => item.id.toString()}
                        />
                    </View>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>Total R$ {handleCheckout}</Text>
                        <TouchableOpacity
                            onPress={handleCheckout}
                            style={styles.clearBtn}
                        >
                            <Text style={styles.clearBtnTxt}>Limpar Carrinho</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Catalog')}
                            style={styles.continueBtn}
                        >
                            <Text style={styles.continueBtnTxt}>Continuar comprando</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Catalog')}
                            style={styles.checkoutBtn}
                        >
                            <Text style={styles.checkoutBtnTxt}>Concluir pedido</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )
            }
        </View>
    );
};
export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 150,
    },
    empty: {
        fontSize: 16,
        marginBottom: 20,
    },
    listContainer: {
        flex: 1,
    },
    totalContainer: {
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#F9F9F9',
        borderTopColor: '#CCC',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    clearBtn: {
        marginTop: 10,
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
    },
    clearBtnTxt: {
        color: '#FFF',
        textAlign: 'center',
    },
    continueBtn: {
        marginTop: 10,
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    continueBtnTxt: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
    },
    checkoutBtn: {
        marginTop: 10,
        backgroundColor: '#28A745',
        padding: 10,
        borderRadius: 5,
    },
    checkoutBtnTxt: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
    }
})
import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity}</Text>
        <Text style={styles.title}>{props.title}</Text>
      </Text>
      <View style={styles.itemData}>
        <Text style={styles.amount}>Rs.{props.amount.toFixed(2)}</Text>
        {props.deletable && (
          <TouchableNativeFeedback
            onPress={props.onRemove}
            style={styles.delete}
          >
            <Ionicons name="md-trash" size={23} color="red" />
          </TouchableNativeFeedback>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    overflow: 'hidden',
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'retro',
    color: '#888',
    fontSize: 26,
  },
  title: {
    fontFamily: 'retro',
    fontSize: 26,
  },
  amount: {
    fontFamily: 'retro',
    fontSize: 26,
  },
  delete: {
    marginLeft: 20,
  },
});

export default CartItem;

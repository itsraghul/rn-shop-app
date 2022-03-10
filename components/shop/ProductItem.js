import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Button,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import Colors from '../../constants/Colors';

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableNativeFeedback onPress={props.onSelect} useForeground>
          <View>
            <Image style={styles.image} source={{ uri: props.image }} />
            <View style={styles.container}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>Rs.{props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.action}>{props.children}</View>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    elevation: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  image: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 28,
    marginVertical: 4,

    fontFamily: 'retro',
  },
  price: {
    fontSize: 24,
    color: '#888',
    fontFamily: 'retro',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    marginHorizontal: 20,
  },
  container: {
    marginHorizontal: 10,
    alignItems: 'center',
    height: '15%',
  },
  touchable: {
    overflow: 'hidden',
    borderRadius: 10,
  },
});

export default ProductItem;

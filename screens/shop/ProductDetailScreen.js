import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <Button
        color={Colors.primary}
        title="Add to Cart"
        onPress={() => {
          dispatch(cartActions.addToCart(selectedProduct));
        }}
      />
      <Text style={styles.price}>Rs.{selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('productTitle'),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    marginVertical: 20,
    fontSize: 30,
    color: '#888',
    textAlign: 'center',
    fontFamily: 'retro',
  },
  description: {
    fontSize: 26,
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: 'retro',
  },
});

export default ProductDetailScreen;

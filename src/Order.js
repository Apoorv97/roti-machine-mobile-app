import React from 'react';
import { View } from 'react-native';
import ItemsContainer from './ItemsContainer';
import Header from './Header.js';
import BasketComponent from './BasketComponent'
import Footer from './Footer'
// import { Actions } from 'react-native-router-flux'

const Order = () => {
   return (
     <View style={{ flex: 1 }}>
        <Header />
        <ItemsContainer />
        <BasketComponent />
        <Footer />
      </View>
   )
}



export default Order

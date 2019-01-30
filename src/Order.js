import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import NumberPicker from './NumberPicker'
const Order = () => {


   return (
      // <TouchableOpacity style = {{ margin: 128 }} >
      //    <Text>Your Order</Text>
      // </TouchableOpacity>
      <View>
      <Card
    title='Cart'>
    <Text style={{marginBottom: 20}}>
      Your orders :
    </Text>
    <View
    style={{
          flex: 1,
         flexDirection: 'row',
         height: 50,
         padding: 20,
       }}>
    <Text>
      Item 1
    </Text>
    <NumberPicker />
    </View>
  </Card>
      </View>
   )
}
export default Order

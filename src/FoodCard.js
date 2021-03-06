import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
const FoodCard = () => {

  const goToOrder = () => {
     Actions.order()
  }
  return(
    <Card
  title='HELLO WORLD'
  image={require('../images/pic5.jpg')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Add to Cart'
    onPress = {goToOrder}/>
</Card>
  )

}

export default FoodCard

import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FoodCard from './FoodCard'
const Home = () => {
   const goToOrder = () => {
      Actions.order()
   }
   return (
     <View>
          <FoodCard />
          <FoodCard />
      </View>
   )
}
export default Home

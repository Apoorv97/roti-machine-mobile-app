import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class NumberPicker extends Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "1" value = "1" />
               <Picker.Item label = "2" value = "2" />
               <Picker.Item label = "3" value = "3" />
               <Picker.Item label = "4" value = "4" />
               <Picker.Item label = "5" value = "5" />
               <Picker.Item label = "6" value = "6" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
         </View>
      )
   }
}
export default NumberPicker

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      color: 'red'
   }
})

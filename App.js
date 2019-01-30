import React, { Component } from 'react';
import { isSignedIn } from "./src/Auth.js";
import { SignedOut, SignedIn } from "./src/Routes";

import {createSwitchNavigator, createAppContainer} from 'react-navigation'
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
   isSignedIn()
     .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
     .catch(err => alert("An error occurred"));
 }

   render() {

     const { checkedSignIn, signedIn } = this.state;
     if (!checkedSignIn) {
     return null;
   }

      alert(signedIn)
    //    if (signedIn) {
    //   return <SignedIn />;
    // } else {
    //   return <SignedOut />;
    // }

     const Layout = createAppContainer(createSwitchNavigator(
        {
          SignedIn: {
            screen: SignedIn
          },
          SignedOut: {
            screen: SignedOut
          }
        },
        {
          initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
      ));

      return <Layout/>;

   }

}
export default App

import React, {Component} from 'react';
import { View } from 'react-native';
import {Header} from './common/';
import firebase from 'firebase';
import LoginForm from './LoginForm'

class App extends Component{
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyD4uJeUwZTTF3sbwLgTWxk3Htv1zCG8ua8",
        authDomain: "react-native-auth-11b73.firebaseapp.com",
        databaseURL: "https://react-native-auth-11b73.firebaseio.com",
        projectId: "react-native-auth-11b73",
        storageBucket: "react-native-auth-11b73.appspot.com",
        messagingSenderId: "33566334683"
      })
  }

  render() {
    return(
      <View>
        <Header text="Auth" />
        <LoginForm/>
      </View>

    )
  }
}
export default App;

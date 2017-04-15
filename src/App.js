import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Header, Spinner, Button, Card, CardSection} from './common/';
import firebase from 'firebase';
import LoginForm from './LoginForm'
import firebaseConfig from '../firebaseConfig'
import LoggedArea from './LoggedArea';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
      user: null
    }
  }

  componentWillMount = () => {
    firebase.initializeApp(firebaseConfig)

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      this.setState({
        loggedIn: user ? true : false,
        user: user
      })
    })
  }

  renderApp = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <LoggedArea user={this.state.user} />
        );
      case false:
        return <LoginForm/>;
      default:
        return <Spinner />;
    }
  }

  render() {
    return(
      <View>
        <Header text="Auth" />
        {this.renderApp()}
      </View>

    )
  }
}
export default App;

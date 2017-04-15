import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Header, Spinner, Button, Card, CardSection} from './common/';
import firebase from 'firebase';
import LoginForm from './LoginForm'
import firebaseConfig from '../firebaseConfig'

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
          <View>
          <Card>
            <CardSection>
              <Text>
                    Welcome {this.state.user.email}
              </Text>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Button onPress={ () => firebase.auth().signOut()}>Log Out </Button>
            </CardSection>
          </Card>
          </View>
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

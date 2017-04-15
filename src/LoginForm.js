import React, {Component} from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, PasswordField, MailField, Spinner } from './common/'

class LoginForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password: '',
      error: '',
      loading: false
    }
  }

  onButtonPress = () => {
    const {email, password} = this.state;
    this.setState({
      error: '',
      loading: true
    })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.loginSucess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(this.loginSucess.bind(this))
        .catch(this.loginFail.bind(this));
      });
  }

  loginSucess = () => {
    this.setState({
      email : '',
      password: '',
      error: '',
      loading: false
    })
  }

  loginFail = () => {
    this.setState({
      error: "Authentication Error",
      loading: false
    })
  }

  renderLoginButton = () => {
    if(this.state.loading)
      return <Spinner size="small" />

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login!
      </Button>
    )
  }

  render() {
    return(
      <Card>
        <CardSection>
          <MailField
            label="Email"
            placeholder="Type your email..."
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <PasswordField
            secureTextEntry
            label="Password"
            placeholder="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderLoginButton()}
        </CardSection>
      </Card>
    )
  }
}
export default LoginForm;

import React, {Component} from 'react';
import { View, Text} from 'react-native'
import { Card, CardSection, Button } from './common/'
import firebase from 'firebase';

class LoggedArea extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Card>
          <CardSection>
            <Text>
                  Welcome {this.props.user.email}
            </Text>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Button onPress={ () => firebase.auth().signOut()}>Log Out </Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}
export default LoggedArea;

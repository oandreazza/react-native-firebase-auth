import React, {Component} from 'react';
import { InputText } from 'react-native';
import { Card, CardSection, Button } from './common/'

class LoginForm extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card>
        <CardSection>

        </CardSection>
        <CardSection>

        </CardSection>
        <CardSection>
          <Button>
            Login!
          </Button>
        </CardSection>
      </Card>
    )
  }
}
export default LoginForm;

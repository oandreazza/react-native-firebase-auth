import React from 'react';
import { TouchableOpacity, Text} from 'react-native';

const Button = ({onPress, children}) => {
  const {buttonStyle,fontStlye} = style;

  return(
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={fontStlye}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const style = {
  fontStlye: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex:1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
}

export { Button };
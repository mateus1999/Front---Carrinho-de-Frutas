import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import { styles } from './styles'

const Button = ({ children, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.btn}
      onPress={onPress} >
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  </View>
);

export default Button;
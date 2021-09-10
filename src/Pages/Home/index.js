import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
}

  from 'react-native';

import { styles } from './styles'

import Button from '../../components/Button'
import BackgroundLogin from '../../components/images/BackgroundLogin.png'
import logo from '../../components/images/logo.png'

const Home = ({ navigation }) => {
  //----Botao levando pro login ----\\\
  const handleSign = () => {

    navigation.replace('Login')
  }

  return (
    <View style={styles.container}>
      <Image
        source={BackgroundLogin}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.form}>
        <Image
          source={logo}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Text
          style={styles.title}>
          Welcome{'\n'}
          to our store
        </Text>
        <Text style={styles.subTitle}>Ger your groceries in as fast as one hour</Text>

        <Button
          onPress={handleSign}>
          Get Started
        </Button>

      </View>
    </View>
  );
}

export default Home;
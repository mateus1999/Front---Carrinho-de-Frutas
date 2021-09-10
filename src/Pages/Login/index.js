import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons'
import { styles } from './styles'

import Button from '../../components/Button'
import BackgroundCadastro from '../../components/images/BackgroundCadastro.png'

const Login = ({ navigation }) => {

  const [hidePass, setHidePass] = useState(true)

  {/*Campo de Validação Email & Senha*/ }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSign = () => {
    if (email == "") {
      alert('Preencha seus dados')
    }
    else if (password == "") {
      alert('Preencha seus dados')
    }
    else
      (navigation.navigate('HomeScreen'))
  }
  {/*Campo de Validação Email & Senha*/ }

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <ScrollView>
        <View style={styles.imageBackground}>
          <ImageBackground
            source={BackgroundCadastro}
            style={styles.image} />
        </View>

        <View style={styles.formulario}>
          <Text style={styles.loging}>Loging</Text>
          <Text style={styles.subTitle}>Enter your emails and passowrd</Text>

          <View style={styles.forms}>

            <Text style={styles.textEmail}>Email</Text>

            <TextInput
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              autoCorrect={false}
              keyBoardType="email-address"
              style={styles.input}/>

            <Text style={styles.textPassowrd}>Password</Text>
            <TouchableOpacity
              onPress={() => setHidePass(!hidePass)}
              style={styles.icon}>
              {hidePass ?
                < Ionicons name='eye' color='#7C7C7C' size={25} />
                :
                < Ionicons name='eye-off' color='#7C7C7C' size={25} />}

            </TouchableOpacity>
            <View style={styles.inputArea}>
              <TextInput
                style={styles.inputPassword}
                secureTextEntry={hidePass}
                keyBoardType="password"
                value={password}
                onChangeText={setPassword}
              />
              <View>

              </View>
            </View>
            <Text style={styles.createPassoword}>Forgot Passowrd?</Text>

            <Button
              onPress={() => handleSign()}>
              Log In
            </Button>

            <View style={styles.account}>
              <Text style={styles.accountUp}>Don't have an account?</Text>
              <TouchableOpacity onPress={handleSign}>
                <Text style={styles.singUp}> Sing Up</Text>
              </TouchableOpacity>

            </View>

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView >
  );
}

export default Login
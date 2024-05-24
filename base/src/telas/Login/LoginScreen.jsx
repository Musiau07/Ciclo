import React, { useState } from 'react';
import { Text, TextInput, Button, Image, TouchableOpacity, Alert, SafeAreaView, StyleSheet } from 'react-native';
import styles from './Styles';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const handleResetSenha = async () => {
    navigation.navigate('ResetSenha');
  }

  const handleLoginScreen = async () => {
    try {
      //verificar se os campos foram preenchidos
      if (!email || !senha) {
        Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        return
      }
      //objeto para enviar pra api
      const data = {
        email: email,
        senha: senha
      }

      //enviar os dados para a api
      const response = await axios.post('http://10.0.2.2:8085/api/validation', data);
      Alert.alert('Login realizado com sucesso');
      navigation.navigate('Menu')


      //verificar se o login foi efetuado com sucesso
      if (response.status === 200) {
        setEmail('');
        setSenha('');
      }
      else {
        Alert.alert('Email ou senha incorretos')
      }

    }
    catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Email ou senha incorretos ')

      }

      else {
        console.log(error)
        Alert.alert('Ocorreu um erro ao tentar fazer login')
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../../res/img/logo.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setSenha}
        value={senha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleLoginScreen}>Login</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}></TouchableOpacity>
      </TouchableOpacity>
      <Text style={styles.textoLink} color="#f69499" onPress={() => navigation.push('Cadastro')}>Ainda não possui um Cadastro?</Text>
      <TouchableOpacity onPress={handleResetSenha}>
        <Text style={styles.resetSenha}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
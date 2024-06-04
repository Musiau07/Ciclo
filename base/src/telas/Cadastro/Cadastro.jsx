import React, { useState } from "react";
import { View, TextInput, Alert, Image, Button, Text } from "react-native";
import axios from 'axios'; 
import styles from './Styles'

const Cadastro = ({ navigation }) => {
  const [mensagem, setMensagem] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    email: '',
    senha: ''
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  //validar que os campos não são vazios
  const handleCadastrar = async () => {
    if (!formData.nome || !formData.email || !formData.senha) {
      setMensagem('Todos os campos são obrigatórios')
      return;
    }

    //envio de informações para a API cadastrar no banco de dados
    try {
      await axios.post('http://10.0.2.2:8085/api/create', formData);
      Alert.alert('Cadastro realizado com sucesso');
      navigation.navigate('Login');
    } catch (error) {
      if (error.response.status === 401) {
        setMensagem('O ID ' + formData.id + 'já existe no banco de dados')
      }
      else {
        console.log(error);
        setMensagem('Ocorreu um erro ao cadastrar o usuário. Tente novamente!!!')
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../res/img/logo-removebg.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(text) => handleInputChange('nome', text)}
        value={formData.nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => handleInputChange('email', text)}
        keyboardType="email-address"
        value={formData.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => handleInputChange('senha', text)}
        value={formData.senha}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Cadastrar" styleradius={"sm"} type="solid" color="#f69499" onPress={handleCadastrar} />
        </View>
      </View>
      <Text style={styles.textoLink} color="#f69499" onPress={() => navigation.push('Login')}>Já possui um Cadastro? Faça o Login</Text>
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

    </View>
  )
};

export default Cadastro;
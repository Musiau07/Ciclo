import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

const AtualizarUsuario = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');

  const handleAtualizar = () => {
  };

  const handleVoltar = () => {
    navigation.navigate('Listar'); 
  };
  const handleHome = () => {
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atualizar Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
      />
      <View style={styles.buttonsContainer}>
        <Button title="Atualizar" onPress={handleAtualizar} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Voltar" onPress={handleVoltar} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Home" onPress={handleHome} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonsContainer: {
    marginTop: 10,
  },
});

export default AtualizarUsuario;
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './Styles';
import img from './../../../res/img/background.jpg';


const Cadastro = () => {
  return (
    <ImageBackground source={img} style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../../res/img/logo.png')} style={styles.logo} />
        <TextInput style={styles.input} placeholder="Nome do usuario" />
        <TextInput style={styles.input} placeholder="Sobrenome" />
        <TextInput style={styles.input} placeholder="Data de nascimento" />
        <TextInput style={styles.input} placeholder="G-mail" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Cadastro;
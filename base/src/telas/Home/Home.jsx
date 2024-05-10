import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './Styles';
import img from '../../../res/img/';
import { Button } from '@rneui/base';


const Home = () => {
  return (
    <ImageBackground source={img} style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../../res/img/logo.png')} style={styles.logo} /> 


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} >Login</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} >Cadastrar</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
    
  );
};


export default Home;
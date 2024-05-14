import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './Styles';
import img from '../../../res/img/background.jpg';
import { Button } from '@rneui/base';


const Home = ({navigation}) => {
  return (
    <ImageBackground source={img} style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../../res/img/logo.png')} style={styles.logo} /> 


        <Text style={styles.title}></Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Cadastro"
                    onPress={() => navigation.navigate('Cadastro')}
                    color='#FFB6C1'
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate('LoginScreen')}
                    color='#FFB6C1'
                />
            </View>
      </View>
    </ImageBackground>
    
  );
};


export default Home;
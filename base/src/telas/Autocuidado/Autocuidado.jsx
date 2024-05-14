import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './Styles';
import img from '../../../res/img/background.jpg';


const Autocuidado = () => {
  return (
    
    <ImageBackground source={img} style={styles.container}>
    
      <View style={styles.content}>
        <Image source={require('../../../res/img/cuidados.png')} style={styles.logo} />
        <Image source={require('../../../res/img/cuidados2.png')} style={styles.logo} />
        <Image source={require('../../../res/img/cuidados4.png')} style={styles.logo} />
        
      </View>

      
    </ImageBackground>
  );
};

export default Autocuidado;
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './Styles';
import img from './../../../res/img/background.jpg';


const Calendario = () => {
  return (
    <ImageBackground source={img} style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../../res/img/calendario.png')} style={styles.Calendario} />
        
      </View>
    </ImageBackground>
  );
};

export default Calendario;
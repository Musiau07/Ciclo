import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './Styles';
import img from './../../../res/img/background.jpg';


const Menu = () => {
  return (
    <ImageBackground source={img} style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../../res/img/logo2.png')} style={styles.logo} />
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>𝙲𝚊𝚕𝚎𝚗𝚍𝚊́𝚛𝚒𝚘</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>𝙰𝚞𝚝𝚘𝚌𝚞𝚒𝚍𝚊𝚍𝚘</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>𝙻𝚎𝚖𝚋𝚛𝚎𝚝𝚎</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>𝙰𝚗𝚘𝚝𝚊𝚌̧𝚊̃𝚘</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Menu;
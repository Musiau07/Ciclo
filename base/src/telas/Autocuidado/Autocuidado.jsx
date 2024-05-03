import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './Styles';
import img from './../../../res/img/background.jpg';


const Autocuidado = () => {
  return (
    
    <ImageBackground source={img} style={styles.container}>
    
      <View style={styles.content}>
        <Image source={require('../../../res/img/cuidados.png')} style={styles.logo} />
        <Image source={require('../../../res/img/cuidados2.png')} style={styles.logo} />
        <Image source={require('../../../res/img/cuidados4.png')} style={styles.logo} />
        
      </View>

      {/* <nav class="nav nav-pills nav-justified">
  <a class="nav-item nav-link active" href="#">Active</a>
  <a class="nav-item nav-link" href="#">Link</a>
  <a class="nav-item nav-link" href="#">Link</a>
  <a class="nav-item nav-link disabled" href="#">Disabled</a>
</nav> */}
    </ImageBackground>
  );
};

export default Autocuidado;
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Styles';
import { Button } from '@rneui/base';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../../res/img/logo-removebg.png')} style={styles.logo} />


        <Text style={styles.title}></Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Cadastro"
            onPress={() => navigation.navigate('Cadastro')}
            color='#f69499'
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            onPress={() => navigation.navigate('Login')}
            color='#f69499'
          />
        </View>
      </View>
    </View>

  );
};


export default Home;
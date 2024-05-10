import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './Styles';
import img from './../../../res/img/background2.jpg';
import { Button } from '@rneui/base';



const Menu = ({navigation}) => {
  return (
    
    <ImageBackground source={img} style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../../res/img/logo3.png')} style={styles.logo} />

          
          

            <TouchableOpacity style={styles.button}>
            <View style = {styles.buttonContainer}>
                <Button
                    title="        Autocuidado    "
                    color='#FF1493'
                    onPress={()=> navigation.navigate ('Autocuidado')}
                />
            </View>   
        </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
            <View style = {styles.buttonContainer}>
                <Button
                    title="         Calendario      "
                    color='#FF1493'
                    onPress={()=> navigation.navigate('Calendario')}
                />
            </View>   
        </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
            <View style = {styles.buttonContainer}>
                <Button
                    title="         Lembrete        "
                    color='#FF1493'
                    onPress={()=> navigation.navigate('Lembrete')}
                />
            </View>   
        </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <View style = {styles.buttonContainer}>
                <Button
                    title="         Anotação        "
                    color='#FF1493'
                    onPress={()=> navigation.navigate('Anotação')}
                />
            </View>   
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Menu;
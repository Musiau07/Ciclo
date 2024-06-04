import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet } from 'react-native';


const Perguntas = () => {
  const [symptoms, setSymptoms] = useState({});

  const handleTextInput = (name, value) => {
    setSymptoms((prevSymptoms) => ({ ...prevSymptoms, [name]: value }));
  };

  const handleSave = () => {

  };

  return (
    <View style={styles.container}>
      
      <View style={styles.logoContainer}>
        <Image source={require('../../../res/img/logo.jpg')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Sinais e sintomas:</Text>
        <TextInput
          style={styles.input}
          placeholder="Fale sobre seus sintomas"
          value={symptoms.sintomas}
          onChangeText={(text) => handleTextInput('sintomas', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Houve dores frequentes?"
          value={symptoms.frequencia}
          onChangeText={(text) => handleTextInput('frequencia', text)}
        />
        <View>
      <Button 
        title="Salvar" 
        color="#FA8072" 
        onPress={handleSave} 
      />
    </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  logo: {
    width: 200,
    height: 100,
  },
  formContainer: {
    padding: 50,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#F08080',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});
export default Perguntas;
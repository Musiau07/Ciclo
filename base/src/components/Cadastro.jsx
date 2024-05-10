import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';
import axios from 'axios';

const Cadastro = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastro = async () => {
        if (!nome || !sobrenome || !email || !senha) {
            setMensagem('Todos os campos são obrigatórios')
            return;
        }

        const data = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha
        }

        //envio de informações para a API cadastrar no banco de dados
        try {
            await axios.post('http://10.0.2.2:8085/api/registerSenai', data);
            Alert.alert('Cadastro realizado com sucesso');
            navigation.navigate('Login');
        } catch (error) {
            console.log(error);
            setMensagem('Ocorreu um erro ao cadastrar o usuário. Tente novamente!!!')
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../res/img/logo2.png')}
                style={styles.logo}
            />
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
            />
            <Text style={styles.label}>Sobrenome:</Text>
            <TextInput
                style={styles.input}
                value={sobrenome}
                onChangeText={setSobrenome}
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.label}>Senha:</Text>
            <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />
            <Button
                title="Cadastrar" onPress={handleCadastro}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 300,
        height: 90,
        marginBottom: 20,
    },
    label: {
        marginTop: 10,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
});

export default Cadastro;
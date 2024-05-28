import React, { useState } from "react";
import { View, Button, TextInput, Alert, Image, StyleSheet, ScrollView, KeyboardAvoidingView, Text } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";
import RNFS from 'react-native-fs'

const Registro = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [imagem, setImagem] = useState(null);

    // Acessar a camera do celular
    const handleCameraLaunch = async () => {
        const options = {
            mediaType: 'photo',
        };

        try {
            const response = await launchCamera(options);
            console.log('pickedFile', response);

            //Verificar se a imagem foi capturada com sucesso
            if (response.assets && response.assets.length > 0) {
                const image = response.assets[0];
                setImagem(image);
            }
            else {
                console.log("Nenhuma imagem foi selecionada")
            }
        }
        catch (error) {
            console.log('Error', error);
        }
    };

    //Acessar a biblioteca de imagens do celular 
    const handleLibraryLaunch = async () => {
        const options = {
            mediaType: 'photo',
        };

        try {
            const response = await launchCamera(options);
            console.log('pickedFile', response);

            //Verificar se a imagem foi capturada com sucesso
            if (response.assets && response.assets.length > 0) {
                const image = response.assets[0];
                setImagem(image);
            }
            else {
                console.log("Nenhuma imagem foi selecionada")
            }
        }
        catch (error) {
            console.log('Error', error);
        }
    };

    const limparFormulario = () => {
        setNome('');
        setSobrenome('');
        setEmail('');
        setSenha('');
        setImagem(null);
    };

    const enviarDadosAPI = async () => {

        try {
            //Campos Obrigatórias
            if (!nome || !sobrenome || !email || !senha || !imagem) {
                Alert.alert('Erro', 'Preencha todos os campos')
                return;
            }

            //Leitura do arquivo antes da imagem como base64
            const imagemData = await RNFS.readFile(imagem.url, 'base64');

            //Configuração da requisição de dados
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            //URL da sua API para enviar os dados e a imagem
            const apiUrl = 'http://localhost:8085/imagem';

            //Objetivo com os dados a serem enviados para a API
            const dados = {
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                senha: senha,
                imagem: imagemData
            };

            //Enviar os dados para a API com a imagem
            const response = await axios.post(apiUrl, data, config);
            console.log('Resposta da API: ', response.data);

            //Limpar o formulario apos o envio dos dados 
            limparFormulario();

            //Retornar para a pagina inicial
            navigation.navigate('LoginAP');
        }
        catch (error) {
            console.log('Erro ao enviar os dados: ', error);

            if (error.response && error.response.this.status === 401) {
                Alert.alert('Email ja cadastrado na base de dados. Tente com um email diferente');
            } else {
                //Caso contrario exibe uma mensagem generica de erro
                Alert.alert('Erro ao enviar os dados. Por favor, tente novamente mais tarde.')
            }
        }
    };

    return(
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.imageContainer}>
                    {/* Imagem centralizada no topo */}
                    <Image
                        source={imagem ? {uri: imagem.uri} : require('../../../res/img/logo2.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.formContainer}>
                    {/* Formulario de Cadastro */}
                    <TextInput
                     placeholder="Nome"
                     value={nome}
                     onChangeText={(text) => setNome(text)}
                     style={styles.input}
                     />
                     <TextInput
                     placeholder="Sobrenome"
                     value={sobrenome}
                     onChangeText={(text) => setSobrenome(text)}
                     style={styles.input}
                     />
                     <TextInput
                     placeholder="Email"
                     value={email}
                     onChangeText={(text) => setEmail(text)}
                     style={styles.input}
                     keyboardType="email-address"
                     />
                     <TextInput
                     placeholder="Senha"
                     value={senha}
                     onChangeText={(text) => setSenha(text)}
                     style={styles.input}
                     secureTextEntry
                     />
                </View>
                <View style={styles.buttonContainer}>
                    {/* Botao da camera cor verde */}
                    <Button title="Câmera" onPress={handleCameraLaunch} color="green" />
                    {/* Botao para selecionar imagem da galeria na cor azul */}
                    <Button title="Galeria" onPress={handleLibraryLaunch} color="blue" />
                    {/* Botao enviar na cor vermelha */}
                    <Button title="Enviar" onPress={enviarDadosAPI} color="red" />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center', 
     },
     scrollViewContent:{
         flexGrow: 1,
         justifyContent: 'center',
         alignItems: ' center',
     },
     imageContainer: {
         justifyContent: 'center',
         alignItems: 'center',
         marginBottom: 20,
     },
     image:{
         width: 200,
         height: 200,
         resizeMode: 'contain' ,      
     },
     formContainer:{
         width: '80%',
         marginBottom: 20,
     },
     input: {
         borderWidth: 1,
         borderColor: 'black',
         borderRadius: 5,
     },
     buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
     },
});
export default Registro;
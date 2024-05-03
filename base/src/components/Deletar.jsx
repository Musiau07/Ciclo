import React,{useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import axios from "axios";

const Deletar = ({ navigation }) => {
    const [id, setId] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleDelete = () => {
        axios.delete(`http://10.0.2.2:8085/api/deletar/${id}`)
            .then(response => {
                setMensagem('Registro deletado com sucesso!');
                setId("");
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    setMensagem("O ID não existe no banco de dados");
                }
                else {
                    setMensagem("Erro ao deletar o usuário");
                }
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Deletar</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    value={id}
                    onChangeText={setId}
                    placeHolder="ID do usuário"
                    keyboardType="numeric"
                />

                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title="Deletar" onPress={handleDelete} />
                    </View>
                </View>
                <Text style = {styles.mensagem}>{mensagem}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
    },
    form:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginBottom:20,
    },
    input:{
        width:'80%',
        height:40,
        borderColor:'gray',
        borderWidth:1,
        paddingHorizontal:10,
        marginBottom:10,
    },
    mensagem:{
        color:'black',
    },
    button:{
        flex:1,
        marginHorizontal:5,
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
    },
    


});

export default Deletar;

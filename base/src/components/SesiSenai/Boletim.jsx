import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Boletim = ({ navigation }) => {
    const [notas] = useState([
        { disciplina: "matematica", nota: 7.5 },
        { disciplina: "história", nota: 8.0 },
        { disciplina: "ciências", nota: 6.5 },
        { disciplina: "literatura", nota: 9.0 },
    ]);

    // calcular notas:
    const totalNotas = notas.reduce((acc, cur) => acc + cur.nota, 0);
    const media = totalNotas / notas.length;

    // verificar se o aluno está aprovado:
    const status = media >= 7;
    const statusTex = status ? 'aprovado' : 'reprovado'
    const statusColor = status ? 'green' : 'red';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BOLETIM ESCOLAR</Text>
            <View style={styles.header}>
                <Text style={styles.headerText}>disciplina</Text>
                <Text style={styles.headerText}>notas</Text>
            </View>


            {notas.map((item,index) => (
                <View key={index} style={styles.row}>
                    <Text style={styles.disciplina}>{item.disciplina}</Text>
                    <Text style={styles.nota}>{item.nota.toFixed(1)}</Text>
                </View>
            ))}
            <Text style={styles.media}>MÉDIA:{media.toFixed(1)}</Text>
            <Text style={[styles.status, { color: statusColor }]}>{statusTex}</Text>
            <View style={styles.Button}>
                <Button title="voltar para a home" color="red" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'darkblue',
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    headerText: {
        fontSize:18,
        fontWeight: 'bold',
        color:'darkblue',
    },
    row:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width:'100%',
        marginBottom:5,
    },
    disciplina:{
        fontSize:16,
        color:'navy',
    },
    nota:{
        fontSize:16,
        color:'navy',
    },
    media:{
        fontSize:20,
        fontWeight:'bold',
        color:'darkgreen',
        marginTop:10,
    },
    status:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:20,
    },
    button:{
        width:'80%',
        marginTop:20,
    },


});
export default Boletim;
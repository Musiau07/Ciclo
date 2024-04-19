import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, SafeAreaView, Text, Touchable, TouchableOpacity, View } from "react-native";
import imagemFundo from '../../../../res/img/papeldefundo.webp'

export default function ListaAlunos() {
  
    const [aluno, setAluno] = useState ([]);
    {/* LISTA DE DADOS EXTERNOS */}
    useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => setAluno(json))

},[]);

{/* LISTA DE DADOS LOCAL */}

    const alunos = [
        { id: '1', nome: 'julia', ra: '123', idade: '15' },
        { id: '2', nome: 'duda', ra: '231', idade: '16' },
        { id: '3', nome: 'vitor', ra: '321', idade: '20' },
        { id: '4', nome: 'laura', ra: '897', idade: '18' },
        { id: '5', nome: 'matheus', ra: '761', idade: '22' },
        { id: '6', nome: 'kaike', ra: '542', idade: '26' },
    ];

    const ExibirAlunos = ({ item }) => (
            
        <View style={{backgroundColor:'#ffffff', padding:10}}>
            <TouchableOpacity>
            <Text style={{color: 'red'}}>{item.nome}</Text>
            </TouchableOpacity>
        </View>


    );

    return (
        <SafeAreaView>
            <ImageBackground style={{height:'100%'}} source={imagemFundo}>
                <FlatList

                    data={aluno}
                    keyExtractor={item => item.id}
                    renderItem={ExibirAlunos}

                />

            </ImageBackground>
        </SafeAreaView>



    );
}
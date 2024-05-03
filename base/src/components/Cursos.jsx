import React from "react";
import  {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const Cursos = ({navigation })=>{
    const cursos =[
        'agronomia',
        'medicina',
        'medicina veterinaria',
        'tecnologia da informação'
    ];
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cursos Disponiveis</Text>
            {cursos.map((curso,index)=>(
                <Text key={index} style={styles.cursoItem}>
                    {curso}
                </Text>
            ))}
            {/*botão para voltar para pagina de login*/}
            <TouchableOpacity>
                style={styles.voltarbutton}
                onPress={()=> navigation.navigate('Login')}
                
                <Text style={styles.voltarbuttontext}>Voltar para o Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20,
    },
    cursoItem:{
        marginBottom:10,
        fontSize:18,
    },
    voltarbutton:{
        marginTop:20,
        backgroundColor:'#007bff',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5,
    },
    voltarbuttontext:{
        color:'#fff',
        fontSize:18,
    },
});

export default Cursos;
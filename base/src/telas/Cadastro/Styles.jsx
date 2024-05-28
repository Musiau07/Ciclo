import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
    },
    title:{
        fontSize:40,
        fontWeight: 'bold',
        color:'#f69499',
        marginBottom: 40,
    },
    textoLink:{
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 15,
        color: '#efa9ac',
        fontWeight: 'bold',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 40,
    },
    input:{
        height:40,
        borderRadius: 15,
        borderColor: '#bcbcbc',
        borderStyle: 'solid',
        backgroundColor: 'white',
        borderWidth:1,
        marginBottom:15,
        padding:10,
        width:'80%',
    },
    buttonContainer:{
        marginTop: 10,
        borderRadius: 20,
        flexDirection:'column',
        alignItems:'center',
        width:'80%',
    },
    button:{
        borderRadius: 20,
        marginBottom:10,
        width:'100%',
    },
    mensagem:{
        color:'red',
        marginTop:10,
    },
});
export default styles;


import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor:'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color:"#f69499"
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});


export default styles;
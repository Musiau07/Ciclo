import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
 
 content: {
   backgroundColor: 'rgba(255, 255, 255, 0.8)',
   padding: 20,
   borderRadius: 10,
   width: '80%',
   alignItems: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 70,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#f69499',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  textoLink: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 15,
    color: '#efa9ac',
    fontWeight: 'bold',
  },
  resetSenha: {
    marginTop: 10,
    fontSize: 15,
    color: '#efa9ac',
    fontWeight: 'bold',
  },
});

export default styles;
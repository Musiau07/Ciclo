import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },

logo:{
  marginBottom: 10,
},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,
    height: 200,
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
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default styles;
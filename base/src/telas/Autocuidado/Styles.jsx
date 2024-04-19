import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

 container: {
    flex: 1,
    justifyContent: 'space-around',
    fontSize: 100,
 },
 logo:{
    marginBottom: 25,
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
    backgroundColor: '#FFB6C1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default styles;
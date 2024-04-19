import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 content: {
   backgroundColor: 'rgba(255, 255, 255, 0.8)',
   padding: 20,
   borderRadius: 10,
   width: '100%',
   alignItems: 'center',
  },

 
  input: {
    width: '1%',
    height: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
  },
  
});

export default styles;
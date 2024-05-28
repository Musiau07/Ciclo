import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const Lembrete = () => {
  const [perguntas, setPerguntas] = useState([
    { id: 1, texto: 'Comprar absorvente', concluida: false },
    { id: 2, texto: 'Remedios', concluida: false },
    { id: 3, texto: 'Coletor menstrual', concluida: false },
    // ...
  ]);

  const handleConcluir = (id) => {
    setPerguntas((perguntas) =>
      perguntas.map((pergunta) => {
        if (pergunta.id === id) {
          return { ...pergunta, concluida: true };
        }
        return pergunta;
      })
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../res/img/background.jpg')} style={styles.background} />
      <View style={styles.tabela}>
        <Text style={styles.titulo}>𝑳𝒆𝒎𝒃𝒓𝒆𝒕𝒆</Text>
        <View style={styles.linhas}>
          {perguntas.map((pergunta) => (
            <TouchableOpacity key={pergunta.id} onPress={() => handleConcluir(pergunta.id)} style={styles.linha}>
              <Text style={styles.texto}>{pergunta.texto}</Text>
              <Text style={styles.status}>{pergunta.concluida ? '𝗖𝗼𝗻𝗰𝗹𝘂𝗶́𝗱𝗼✔️' : 'Não Concluída'}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  tabela: {
    backgroundColor: '#FFE4E1',
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 25,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  linhas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  linha: {
    width: '100%',
    height: 60,
    backgroundColor: '#FFB6C1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  texto: {
    fontSize: 18,
    color: '#000000',
  },
  status: {
    fontSize: 16,
    color: '#000000',
  },
});
export default Lembrete;
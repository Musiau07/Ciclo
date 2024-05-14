import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Lembrete = () => {
  const [reminders, setReminders] = useState([
    { id: 1, text: 'Lembrete 1', checked: false },
    { id: 2, text: 'Lembrete 2', checked: false },
    { id: 3, text: 'Lembrete 3', checked: false },
  ]);

  const handleCheck = (id) => {
    const newReminders = reminders.map((reminder) => {
      if (reminder.id === id) {
        return { ...reminder, checked: !reminder.checked };
      }
      return reminder;
    });
    setReminders(newReminders);
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={require('../../../res/img/background.jpg')} style={styles.backgroundImage} />
      </View>
      <FlatList
        data={reminders}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.reminder} onPress={() => handleCheck(item.id)}>
            <Text style={styles.reminderText}>{item.text}</Text>
            <View style={styles.reminderCheck}>
              {item.checked ? (
                <Icon name="Marcado" size={20} color="#fff" />
              ) : (
                <Icon name="Desmarcado" size={20} color="#fff" />
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Lembrete;
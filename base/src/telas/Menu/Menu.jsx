import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import { Button } from '@rneui/base';

const Menu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../../../res/img/logo3.png')} style={styles.logo} />
                <TouchableOpacity style={styles.button}>
                    <View style={[styles.buttonContainer]}>
                        <Button
                            title="          Autocuidado          "
                            color='#feeaec'
                            onPress={() => navigation.navigate('Autocuidado')}
                            buttonStyle={{ borderRadius: 10 }}
                            titleStyle={{ color: '#ec407a' }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <View style={[styles.buttonContainer]}>
                        <Button
                            title="            Calendario            "
                            color='#feeaec'
                            onPress={() => navigation.navigate('Calendario')}
                            buttonStyle={{ borderRadius: 10 }}
                            titleStyle={{ color: '#ec407a' }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <View style={[styles.buttonContainer]}>
                        <Button
                            title="             Lembrete             "
                            color='#feeaec'
                            onPress={() => navigation.navigate('Lembrete')}
                            buttonStyle={{borderRadius: 10}}
                            titleStyle={{ color: '#ec407a' }}

                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <View style={[styles.buttonContainer]}>
                        <Button
                            title="             Anotação             "
                            color='#feeaec'
                            onPress={() => navigation.navigate('Anotação')}
                            buttonStyle={{ borderRadius: 10 }}
                            titleStyle={{ color: '#ec407a' }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Menu;

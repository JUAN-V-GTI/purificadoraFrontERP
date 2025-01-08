import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { register } from '../services/Auth.js';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [sex, setSex] = useState('');
    const [rfc, setrfc] = useState('');
    const [phone_Number, setphone_Number] = useState('');
    const [role, setRole] = useState('');
    const [keyboardOpen, setKeyboardOpen] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardOpen(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardOpen(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleRegister = async () => {
        try {
            await register({ username, password, firstname, lastname, sex, rfc, phone_Number, role });
            navigation.navigate('Login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Image source={require('../../assets/agua.webp')} style={[styles.logo, keyboardOpen && styles.hidden]} />
            <Text style={[styles.titulo, keyboardOpen && styles.hidden]}>Registro de Usuarios</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <Icon name="person-outline" size={24} color="#3f4a58" style={styles.icon} />
                        <TextInput
                            placeholder="Nombres"
                            style={styles.textInput}
                            value={username}
                            onChangeText={setUsername}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="lock-closed-outline" size={24} color="#3f4a58" style={styles.icon} />
                        <TextInput
                            placeholder="Contraseña"
                            style={styles.textInput}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="person-outline" size={24} color="#3f4a58" style={styles.icon} />
                        <TextInput
                            placeholder="Apellido Paterno"
                            style={styles.textInput}
                            value={firstname}
                            onChangeText={setFirstname}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="person-outline" size={24} color="#3f4a58" style={styles.icon} />
                        <TextInput
                            placeholder="Apellido Materno"
                            style={styles.textInput}
                            value={lastname}
                            onChangeText={setLastname}
                        />
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={[styles.inputContainer, styles.halfWidth]}>
                            <Icon name="document-text-outline" size={24} color="#3f4a58" style={styles.icon} />
                            <TextInput
                                placeholder="RFC"
                                style={styles.textInput}
                                value={rfc}
                                onChangeText={setrfc}
                            />
                        </View>
                        <View style={[styles.inputContainer, styles.halfWidth]}>
                            <Icon name="male-female-outline" size={24} color="#3f4a58" style={styles.icon} />
                            <TextInput
                                placeholder="Genero"
                                style={styles.textInput}
                                value={sex}
                                onChangeText={setSex}
                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="call-outline" size={24} color="#3f4a58" style={styles.icon} />
                        <TextInput
                            placeholder="Numero telefonico Movil"
                            style={styles.textInput}
                            value={phone_Number}
                            onChangeText={setphone_Number}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="briefcase-outline" size={24} color="#3f4a58" style={styles.icon} />
                        <TextInput
                            placeholder="Role"
                            style={styles.textInput}
                            value={role}
                            onChangeText={setRole}
                        />
                    </View>
                </View>
            </ScrollView>
            {!keyboardOpen && (
                <TouchableOpacity style={styles.cajaBoton} onPress={handleRegister}>
                    <Text style={styles.textBoton}>Registrar</Text>
                </TouchableOpacity>
               
            )}
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#95b8c8',
        paddingVertical: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        marginTop: 20,
        borderRadius:90,
    },
    hidden: {
        display: 'none',
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
    },
    scrollViewContainer: {
        alignItems: 'center',
        paddingBottom: 60,
        paddingTop: 10,
    },
    inputWrapper: {
        width: '90%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        elevation: 5,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 1,
    },
    halfWidth: {
        width: '48%',
    },
    icon: {
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        height: 50,
        color: '#3f4a58',
    },
    cajaBoton: {
        backgroundColor: '#3f4a58',
        borderRadius: 10,
        paddingVertical: 10,
        width: 150,
        marginTop: 20,
        marginBottom: 30,
    },
    textBoton: {
        textAlign: 'center',
        color: 'white',
    },
});

export default RegisterScreen;
 
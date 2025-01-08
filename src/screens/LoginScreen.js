/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Keyboard, KeyboardAvoidingView, Image, Platform, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { login } from '../services/Auth';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomAlert from '../components/CustomAlert';  // Asegúrate de usar la ruta correcta

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const imageOpacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
                Animated.timing(imageOpacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
                Animated.timing(imageOpacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const handleLogin = async () => {
        if (!username || !password) {
            setAlertMessage('Por favor ingrese su usuario y contraseña.');
            setAlertVisible(true);
            return;
        }

        try {
            await login({ username, password });

            if (username === "JuanAdmin" || username === "RaquelAdmin") {
                navigation.navigate('Home', { username });
            } else {
                navigation.navigate('Home', { username });
            }
        } catch (error) {
            console.error(error);
            setAlertMessage('Usuario no encontrado. Verifique sus credenciales.');
            setAlertVisible(true);
        }
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <LinearGradient colors={['#3f4a58', '#98e9d0']} style={styles.gradient}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.inner}>
                    <Animated.View style={{ opacity: imageOpacity }}>
                        <Image source={require('../../assets/agua.webp')} style={styles.logo} />
                    </Animated.View>
                    <Text style={styles.titulo}>Login</Text>


                    <View style={styles.whiteContainer}>
                        <View style={styles.inputContainer}>
                            <Icon name="person-outline" size={24} color="#95b8c8" style={styles.icon} />
                            <TextInput
                                placeholder="Username"
                                style={styles.textInput}
                                placeholderTextColor="#3f4a58"
                                value={username}
                                onChangeText={setUsername}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Icon name="lock-closed-outline" size={24} color="#95b8c8" style={styles.icon} />
                            <TextInput
                                placeholder="Password"
                                style={styles.textInput}
                                placeholderTextColor="#3f4a58"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.padreBoton}>
                            <TouchableOpacity style={styles.cajaBoton} onPress={handleLogin}>
                                <Text style={styles.textBoton}>Sign In</Text>
                            </TouchableOpacity>
                             <TouchableOpacity style={styles.cajaBoton} onPress={handleRegister}>
                                <Text style={styles.textBoton}>register</Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>

            <CustomAlert
                isVisible={isAlertVisible}
                title="Alerta"
                message={alertMessage}
                onConfirm={() => setAlertVisible(false)}
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 250,
        height: 250,
        borderRadius:90,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 34,
        marginBottom: 30,
        textAlign: 'center',
    },
    whiteContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        elevation: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 10,
        elevation: 5,
        width: '100%',
    },
    icon: {
        marginRight: 10,
      
    },
    textInput: {
        flex: 1,
        height: 50,
        color: '#95b8c8',
      
    },
    padreBoton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    cajaBoton: {
        backgroundColor: '#95b8c8',
        borderRadius: 10,
        paddingVertical: 10,
        flex: 1,
        marginHorizontal: 5,
    },
    textBoton: {
        textAlign: 'center',
        color: 'white',
    },
});

export default LoginScreen;

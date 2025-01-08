/* eslint-disable import/no-unresolved */
import axios from 'axios';

const API_URL = "http://192.168.100.4:8086/cam";

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        // Captura de errores
        if (error.response) {
            // El servidor respondió con un código de estado fuera del rango 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // La solicitud se hizo pero no se recibió respuesta
            console.log(error.request);
        } else {
            // Ocurrió un error antes de enviar la solicitud
            console.log('Error', error.message);
        }
        throw error; // Propaga el error para manejarlo en un nivel superior si es necesario
    }
};

export const register = async (registerData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, registerData);
        return response.data;
    } catch (error) {
        // Captura de errores
        if (error.response) {
            // El servidor respondió con un código de estado fuera del rango 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // La solicitud se hizo pero no se recibió respuesta
            console.log(error.request);
        } else {
            // Ocurrió un error antes de enviar la solicitud
            console.log('Error', error.message);
        }
        throw error; 
    }
    
   
};

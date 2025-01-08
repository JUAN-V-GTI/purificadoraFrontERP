/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import axios from 'axios';



//----------------------------token------------------------------//
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
//----------------------------login------------------------------//
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    setAuthToken(response.data.token);
    return response.data;
  } catch (error) {
    //...
  }
};
//----------------------------register------------------------------//
export const register = async (registerData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, registerData);
    if (response.status === 200 || response.status === 201) {
      return response.data;
    } else {
      console.error('Error en la respuesta del servidor:', response.status, response.data);
      throw new Error('Error en la respuesta del servidor');
    }
  } catch (error) {
    console.error('Error al registrar usuario', error);
    throw error;
  }
};

export const logout = () => {
  setAuthToken(null);
};
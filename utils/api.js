import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';  // Replace with your backend URL

export const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const getProducts = async () => {
    try {
        const response = await axios.get('http://localhost:4000/api/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};
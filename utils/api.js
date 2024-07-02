import axios from 'axios';

const productionUrl = "https://chatbackend-teal.vercel.app/api"
const developmentUrl = "http://localhost:4000/api"


const API_URL = process.env.NODE_ENV == "production" ? productionUrl: developmentUrl; 
const AUTH_URL = `${API_URL}/auth`

export const signup = async (userData) => {
    try {
        const response = await axios.post(`${AUTH_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


export const login = async (userData) => {
    try {
        const response = await axios.post(`${AUTH_URL}/login`, userData);
        
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};
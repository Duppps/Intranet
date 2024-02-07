import axios from 'axios';

export async function Get(uri) {
    try {
        const response = await axios.get(uri);
        return response.data;                
    } catch (error) {        
        console.error('Erro ao obter aniversariantes:', error);
        return error;
    }
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lista from './components/lista';

function Aniversariantes() {
    const [aniversariantes, setAniversariantes] = useState([]);

    useEffect(() => {
        const fetchAniversariantes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/funcionarios/aniversariantes?status=ativos');
                setAniversariantes(response.data);
            } catch (error) {
                console.error('Erro ao obter aniversariantes:', error);
            }
        };

        fetchAniversariantes();
    }, []);

    return (
        <div className='mt-4'>
            <Lista titulo={'Aniversariantes'} data={aniversariantes}></Lista>            
        </div >
    );

}

export default Aniversariantes;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lista from './components/lista';

function ProxAniversariantes() {
    const [proxAniversariantes, setProxAniversariantes] = useState([]);

    useEffect(() => {
        const fetchAniversariantes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/funcionarios/proxAniversariantes?status=ativos');
                setProxAniversariantes(response.data);                
            } catch (error) {
                console.error('Erro ao obter aniversariantes:', error);
            }
        };

        fetchAniversariantes();
    }, []);

    return (
        <div className='mt-4'>
            <Lista titulo={'Próximos aniversariantes'} data={proxAniversariantes}></Lista>            
        </div >
    );

}

export default ProxAniversariantes;
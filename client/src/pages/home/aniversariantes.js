import React, { useState, useEffect } from 'react';
import Lista from './components/lista';
import { Get } from '../../components/request.js';

function Aniversariantes() {
    const [aniversariantes, setAniversariantes] = useState([]);

    useEffect(() => {
        const get = async () => {
            try {
                const data = await Get('http://localhost:3000/v1/funcionarios/aniversariantes?status=ativos');
                setAniversariantes(data);
            } catch (error) {
                console.error('Erro ao obter aniversariantes:', error);
            }
        }

        get();

    }, []);

    return (
        <div className='mt-4'>
            <Lista titulo={'Aniversariantes'} data={aniversariantes}></Lista>            
        </div >
    );

}

export default Aniversariantes;
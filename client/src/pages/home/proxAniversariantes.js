import React, { useState, useEffect } from 'react';
import Lista from './components/lista';
import { Get } from '../../components/request.js';

function ProxAniversariantes() {
    const [proxAniversariantes, setProxAniversariantes] = useState([]);

    useEffect(() => {
        const get = async () => {
            try {
                const data = await Get('http://localhost:3000/v1/funcionarios/proxAniversariantes?status=ativos');
                setProxAniversariantes(data);
            } catch (error) {
                console.error('Erro ao obter aniversariantes:', error);
            }
        }

        get();

    }, []);

    return (
        <div className='mt-4'>
            <Lista titulo={'Próximos aniversariantes'} data={proxAniversariantes}></Lista>
        </div >
    );

}

export default ProxAniversariantes;
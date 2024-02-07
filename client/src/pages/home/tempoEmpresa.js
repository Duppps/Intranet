import React, { useState, useEffect } from 'react';
import Lista from './components/lista';
import { Get } from '../../components/request.js';

function TempoEmpresa() {
    const [tempoEmpresa, setTempoEmpresa] = useState([]);

    useEffect(() => {
        const get = async () => {
            try {
                const data = await Get('http://localhost:3000/v1/funcionarios/tempoEmpresa?status=ativos');
                setTempoEmpresa(data);
            } catch (error) {
                console.error(error);
            }
        }

        get();

    }, []);

    return (
        <div className='mt-4'>
            <Lista titulo={'Tempo de empresa'} data={tempoEmpresa}></Lista>            
        </div >
    );

}

export default TempoEmpresa;
import React, { useState, useEffect } from "react";
import { Get } from '../../components/request.js';
import Lista from './components/lista';

function Admitidos() {
    const [admitidos, setAdmitidos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Get('http://localhost:3000/v1/funcionarios/admitidos');
                setAdmitidos(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='mt-4'>
            <Lista titulo={'Funcionários admitidos'} data={admitidos}></Lista>
        </div >
    );
}

export default Admitidos;

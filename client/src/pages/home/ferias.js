import React, { useState, useEffect } from "react";
import { Get } from '../../components/request.js';
import Lista from './components/lista';

function Feriantes() {
    const [feriantes, setFeriantes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Get('http://localhost:3000/v1/ferias/feriantes');
                setFeriantes(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='mt-4'>
            <Lista titulo={'Informativo de férias'} data={feriantes}></Lista>
        </div >
    );
}

export default Feriantes;

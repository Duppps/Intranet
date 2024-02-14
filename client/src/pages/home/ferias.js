import React, { useState, useEffect } from "react";
import { Get } from '../../components/request.js';

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
        <div className="mt-2">
            {feriantes.length > 0 && (
                <>
                    <span className="font-bold text-2xl">Funcionários em férias</span>
                    <ul className='list-none mt-2 border rounded-lg'>
                        {feriantes.map(feriante => (
                            <li key={feriante.id} className="border-b px-2 py-1">
                                <div className="grid grid-cols-3">
                                    <div className="col-span-2">
                                        <span className='font-semibold'>{feriante.nome}</span> <br />
                                        <span className='font-light'>{feriante.funcao}</span>
                                    </div>
                                    <div className="text-end items-center grid justify-items-end">
                                        <span className="border-b border-red-400">Retorno {feriante.retornoVisualizacao}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default Feriantes;

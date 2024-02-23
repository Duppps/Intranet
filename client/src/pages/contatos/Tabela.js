import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tabela({ uri, colunas, cabecalho }) {
    const [direction, setDirection] = useState('asc');
    const [sortedColumn, setSortedColumn] = useState(null);
    const [dados, setDados] = useState(null);
    const [termoBusca, setTermoBusca] = useState('');

    useEffect(() => {
        axios.get(uri).then((response) => {
            setDados(response.data);
        });
    }, [uri]);

    const handleBuscaChange = (event) => {
        setTermoBusca(event.target.value);
    };

    const filteredDados = dados ? dados.filter((item) =>
        item.nome.toLowerCase().includes(termoBusca.toLowerCase())
    ) : [];

    function orderBy(order) {
        if (!dados) return;
        const dadosOrdenados = [...dados].sort((a, b) => {
            if (direction === 'asc') {
                return a[order].localeCompare(b[order]);
            } else if (direction === 'desc') {
                return b[order].localeCompare(a[order]);
            } else {
                return 0;
            }
        });
        setDirection(direction === 'asc' ? 'desc' : 'asc');
        setSortedColumn(order);
        setDados(dadosOrdenados);
    }

    function renderSortIndicator(column) {
        if (column === sortedColumn) {
            return direction === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>;
        } else {
            return null;
        }
    }

    return (
        <div>
            <div className='container mx-auto max-w-screen-xl'>
                <div className='mt-5 grid grid-cols-2 gap-5'>
                    <span className='text-3xl font-bold font-sans'>{cabecalho}</span>
                    <div className='text-end'>
                        <input
                            type="text"
                            placeholder="Pesquisar"
                            value={termoBusca}
                            onChange={handleBuscaChange}
                            className="rounded-md border-0 w-80 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <table className='mt-4 text-left w-full table-auto'>
                    <thead>
                        <tr>
                            {Object.keys(colunas).map(colunaKey => (
                                <th key={colunaKey} className='p-3 cursor-pointer' onClick={() => orderBy(colunas[colunaKey].nomeDB)}>
                                    {colunas[colunaKey].label} {renderSortIndicator(colunas[colunaKey].nomeDB)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDados && filteredDados.map(objeto => (
                            <tr key={objeto.id} className='odd:bg-gray-100 even:bg-white'>
                                {Object.keys(colunas).map(colunaKey => (
                                    <td key={colunaKey} className='py-2 ps-3'>
                                        {objeto[colunas[colunaKey].nomeDB]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tabela;

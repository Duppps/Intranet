import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tabela({ uri, colunas }) {
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
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={termoBusca}
                    onChange={handleBuscaChange}
                    className="border p-2 mb-4"
                />
                <table className='mt-4 text-left w-full'>
                    <thead>
                        <tr>
                            {Object.keys(colunas).map(colunaKey => (
                                <th key={colunaKey} className='ps-3 cursor-pointer' onClick={() => orderBy(colunas[colunaKey].nomeDB)}>
                                    {colunas[colunaKey].label} {renderSortIndicator(colunas[colunaKey].nomeDB)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDados && filteredDados.map(objeto => (
                            <tr key={objeto.id} className='odd:bg-gray-200 even:bg-white'>
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

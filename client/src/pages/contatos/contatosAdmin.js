import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/header';

function ContatosAdm() {
    const [dados, setDados] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/v1/funcionarios/administrativo').then((response) => {
            setDados(response.data);
        });
    }, []);

    const ordenarPorNome = () => {
        const dadosOrdenados = [...dados].sort((a, b) => {
            return a.nome.localeCompare(b.nome);
        });
        setDados(dadosOrdenados);
    };

    return (
        <div>
            <Header />
            <div className='container mx-auto max-w-screen-xl'>
                <button onClick={ordenarPorNome}>Ordenar por Nome</button>
                <table className='mt-4 text-left'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Função</th>
                            <th>Setor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados && dados.map(objeto => (
                            <tr key={objeto.id}>
                                <th>{objeto.nome}</th>
                                <th>{objeto.email}</th>
                                <th>{objeto.telefone}</th>
                                <th style={{width: '300px'}}>{objeto.funcao}</th>
                                <th style={{width: '100px'}}>{objeto.setor}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContatosAdm;

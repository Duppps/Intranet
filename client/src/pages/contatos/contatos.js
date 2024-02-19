import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Tabela from './Tabela';

function ContatosAdm() {
    const uri = 'http://localhost:3000/v1/funcionarios/administrativo';
    const colunas = {
        nome: { label: 'Nome', nomeDB: 'nome' },
        email: { label: 'E-mail', nomeDB: 'email' },
        telefone: { label: 'Telefone', nomeDB: 'telefone' },
        funcao: { label: 'Função', nomeDB: 'funcao' },
        setor: { label: 'Setor', nomeDB: 'setor' }
    };

    return (
        <div>
            <Header />
            <div className='container mx-auto max-w-screen-xl'>
                <Tabela uri={uri} colunas={colunas} />
            </div>
        </div>
    );
}

function ContatosManutencao() {
    const uri = 'http://localhost:3000/v1/funcionarios/manutencao';
    const colunas = { 
        nome: { label: 'Nome', nomeDB: 'nome' },
        telefone: { label: 'Telefone', nomeDB: 'telefone' },
        funcao: { label: 'Função', nomeDB: 'funcao' }
    };

    return (
        <div>
            <Header />
            <div className='container mx-auto max-w-screen-xl'>
                <Tabela uri={uri} colunas={colunas} />
            </div>
        </div>
    );
}

export { ContatosAdm, ContatosManutencao };

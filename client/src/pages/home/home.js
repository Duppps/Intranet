import React, { useState, useEffect } from 'react';
import Lista from './components/lista';
import { Carousel } from 'flowbite-react';
import axios from 'axios';
import Data from '../../Utils/Date';
import Funcionario from '../../Utils/Funcionario';

import Header from '../../components/header';

function Home() {
    const [dados, setDados] = useState(null);
    const srcCarousel = 'http://localhost:3000/img/carousel';

    let aniversariantes = [];
    let proxAniversariantes = [];
    let tempoEmpresa = [];
    let admitidos = [];
    let desligados = [];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dados = await axios.get('http://localhost:3000/v1/intranet');
                setDados(dados.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

    }, []);

    if (!dados) {
        return <div></div>;
    }   

    dados.funcionarios.forEach(funcionario => {
        const parameters = {
            id: funcionario.id,
            nome: funcionario.nome,
            funcao: funcionario.funcao,
            nascimento: funcionario.nascimento,
            admissao: funcionario.admissao,
            desligado: funcionario.desligado,
            data_deslig: funcionario.data_deslig
        }

        const funcionario_dados = new Funcionario(parameters).employerDetails();

        if (funcionario_dados.aniversariante === true) {
            aniversariantes.push({
                id: funcionario_dados.id,
                titulo: funcionario_dados.nome,
                descricao: funcionario_dados.funcao
            });
        }

        if (funcionario_dados.aniversarioProximo === true) {
            proxAniversariantes
                .push({
                    id: funcionario_dados.id,
                    titulo: funcionario_dados.nome,
                    descricao: funcionario_dados.funcao,
                    view: funcionario_dados.data_aniversario
                });
        }

        if (funcionario_dados.aniversarioEmpresa === true) {
            tempoEmpresa
                .push({
                    id: funcionario_dados.id,
                    titulo: funcionario_dados.nome,
                    descricao: funcionario_dados.funcao,
                    view: funcionario_dados.tempo_empresa
                });
        }

        if (funcionario_dados.recemAdmitido === true) {
            console.log(funcionario_dados);
            admitidos
                .push({
                    id: funcionario_dados.id,
                    titulo: funcionario_dados.nome,
                    descricao: funcionario_dados.funcao
                });
        }

        if (funcionario_dados.recemDesligado === true) {
            desligados
                .push({
                    id: funcionario_dados.id,
                    titulo: funcionario_dados.nome,
                    descricao: funcionario_dados.funcao
                });
        }

    });

    proxAniversariantes.sort((a, b) => {
        return new Date(b.view) - new Date(a.view);
    })

    const vagas = dados.vagas.map(objeto => {
        return {
            id: objeto.id,
            titulo: objeto.titulo_cargo,
            descricao: '',
            view: objeto.titulo_filial
        };
    });

    const feriantes = dados.feriantes.map(objeto => {
        const retornoFormatado = Data.formatDateToDM(objeto.retorno);
        const retorno = `Retorno ${retornoFormatado}`
        return {
            id: objeto.id,
            titulo: objeto.nome,
            descricao: objeto.funcao,
            view: retorno
        }
    });

    return (
        <div>
            <Header></Header>
            <div className='container mx-auto max-w-screen-xl'>
                <div className='grid grid-cols-12 gap-2'>
                    <div className='col-span-3'>
                        <div className='mt-4'>
                            <Lista titulo={'Aniversariantes'} data={aniversariantes}></Lista>
                        </div >
                        <div className='mt-4'>
                            <Lista titulo={'Tempo de empresa'} data={tempoEmpresa}></Lista>
                        </div >
                        <div className='mt-4'>
                            <Lista titulo={'Próximos aniversariantes'} data={proxAniversariantes}></Lista>
                        </div >
                    </div>
                    <div className='col-span-9 mt-4 px-2'>
                        <div style={{ height: "416px" }}>
                            {dados.carrossel.length > 0 && (
                                <Carousel
                                    leftControl={dados.carrossel.length > 1 ? '' : ' '}
                                    rightControl={dados.carrossel.length > 1 ? '' : ' '}
                                    pauseOnHover
                                >
                                    {dados.carrossel.map(carrossel => (
                                        <img key={carrossel.id} src={`${srcCarousel}/${carrossel.img}`} alt="IMG CAROUSEL" />
                                    ))}
                                </Carousel>
                            )}
                        </div>
                        <div className='grid grid-cols-2 gap-5 mt-4 border-b pb-5'>
                            <Lista titulo={'Informativo de férias'} data={feriantes}></Lista>
                            <Lista titulo={'Vagas'} data={vagas}></Lista>
                        </div>
                        <div className='grid grid-cols-2 gap-5 mt-4'>
                            <Lista titulo={'Funcionários admitidos'} data={admitidos}></Lista>
                            <Lista titulo={'Funcionários desligados'} data={desligados}></Lista>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
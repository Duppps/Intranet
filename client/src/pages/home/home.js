import React, { useState, useEffect } from 'react';
import Lista from './components/lista';
import { Carousel } from 'flowbite-react';
import axios from 'axios';

import Header from '../../components/header';

function Home() {
    const [dados, setDados] = useState(null);
    const srcCarousel = 'http://localhost:3000/img/carousel';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dados = await axios.get('http://localhost:3000/v1/intranet/');
                setDados(dados.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

    }, []);


    if (!dados) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <Header></Header>
            <div className='container mx-auto max-w-screen-xl'>
                <div className='grid grid-cols-12 gap-3'>
                    <div className='col-span-3'>
                        <div className='mt-4'>
                            <Lista titulo={'Aniversariantes'} data={dados.aniversariantes}></Lista>
                        </div >
                        <div className='mt-4'>
                            <Lista titulo={'Tempo de empresa'} data={dados.tempoEmpresa}></Lista>
                        </div >
                        <div className='mt-4'>
                            <Lista titulo={'Próximos aniversariantes'} data={dados.proxAniversariantes}></Lista>
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
                        <div className='grid grid-cols-5 gap-5'>
                            <div className='col-span-2'>
                                <div className='mt-4'>
                                    <Lista titulo={'Informativo de férias'} data={dados.feriantes}></Lista>
                                </div >
                            </div>
                            {/* <div className='mt-4'>
                                <Lista titulo={'Vagas'} data={dados.vagas}></Lista>
                            </div > */}
                            <div className='col-span-3'>
                                <div className='mt-4'>
                                    <Lista titulo={'Funcionários admitidos'} data={dados.admitidos}></Lista>
                                </div >
                                <div className='mt-4'>
                                    <Lista titulo={'Funcionários desligados'} data={dados.desligados}></Lista>
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
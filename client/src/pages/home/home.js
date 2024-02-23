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
                const dados = await axios.get('http://localhost:3000/v1/intranet');
                setDados(dados.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

    }, []);

    if (!dados) {
        return (
            <div></div>
        )
    }

    return (
        <div>            
            <Header></Header>
            <div className='container mx-auto max-w-screen-xl'>
                <div className='grid grid-cols-12 gap-2'>
                    <div className='col-span-3'>
                        <div className='mt-4'>
                            <Lista titulo={'Aniversariantes'} data={dados.aniversariantes}></Lista>
                        </div >
                        <div className='mt-4'>
                            {dados.feriantes.length > 0 && (
                                <Lista className='text-end' titulo={'Informativo de férias'} data={dados.feriantes}></Lista>
                            )}
                        </div>
                        <div className='mt-4'>
                            <iframe className='w-full' src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FSao_Paulo&bgcolor=%23ffffff&showPrint=0&showTabs=0&showCalendars=0&showTz=0&showTitle=0&src=Y18zZTRhNGU3MjAwYzdjZDEzYTY2MDM0MzEwNGJjMWM1ODAwMzg2MzEzMWQwNDA4MzUzZTM3NTA2ZTM2M2E3NGJiQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23E4C441" style={{ height: "260px" }} frameborder="0" />
                        </div>
                        <div className='mt-4'>
                            <Lista titulo={'Tempo de empresa'} data={dados.tempoEmpresa}></Lista>
                        </div>
                        <div className='mt-4'>
                            <Lista titulo={'Próximos aniversariantes'} data={dados.proxAniversariantes}></Lista>
                        </div >
                    </div>
                    <div className='col-span-9 mt-4 px-2'>
                        <div style={{ height: "547px" }}>
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
                        <div className='grid grid-cols-2 gap-5 mt-4'>
                            <div>
                                {dados.vagas.length > 0 && (
                                    <Lista titulo={'Vagas'} data={dados.vagas}></Lista>
                                )}
                            </div>
                            <div>
                                {dados.admitidos.length > 0 && (
                                    <Lista titulo={'Funcionários admitidos'} data={dados.admitidos}></Lista>
                                )}
                                {dados.desligados.length > 0 && (
                                    <Lista titulo={'Funcionários desligados'} data={dados.desligados}></Lista>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
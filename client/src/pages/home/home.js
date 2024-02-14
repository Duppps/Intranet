import Header from '../../components/header';
import Aniversariantes from './aniversariantes';
import ProxAniversariantes from './proxAniversariantes';
import CarouselHome from './carousel';
import TempoEmpresa from './tempoEmpresa';
import Feriantes from './ferias';

function Home() {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto max-w-screen-xl'>
                <div className='grid grid-cols-12 gap-1'>
                    <div className='col-span-3'>
                        <Aniversariantes />
                        <TempoEmpresa />
                        <ProxAniversariantes />
                    </div>
                    <div className='col-span-9 mt-4 px-2'>
                        <CarouselHome />
                        <div className='grid grid-cols-5 gap-1'>
                            <div className='col-span-2'>
                                <Feriantes />
                            </div>
                            <div className='col-span-3'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
import Header from '../../components/header';
import Aniversariantes from './aniversariantes';
import ProxAniversariantes from './proxAniversariantes';
import CarouselHome from './carousel';

function Home() {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto max-w-screen-xl'>
                <div className='grid grid-cols-12 gap-1'>
                    <div className='col-span-3'>
                        <Aniversariantes />
                        <ProxAniversariantes />
                    </div>
                    <div className='col-span-9'>
                        <CarouselHome />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
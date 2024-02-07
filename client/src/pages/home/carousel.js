import React, { useState, useEffect } from 'react';
import { Carousel } from 'flowbite-react';
import { Get } from '../../components/request.js';

function CarouselHome() {
    const [carousel, setCarousel] = useState([]);
    const srcCarousel = 'http://localhost:3001/docs/carousel/'

    useEffect(() => {
        const get = async () => {
            try {
                const data = await Get('http://localhost:3000/v1/carousel/ativos');
                setCarousel(data);
            } catch (error) {
                console.error(error);
            }
        }

        get();
    }, []);

    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            {carousel.length > 0 && (
                <Carousel>
                    {carousel.map(carrossel => {
                        const urlCarousel = srcCarousel+carrossel.img;
                        <img key={carrossel.id} src={urlCarousel} alt='IMG CAROUSEL' />
                    })}                    
                </Carousel>
            )}
        </div>
    );
}

export default CarouselHome;
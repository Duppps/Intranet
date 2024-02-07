import React, { useState, useEffect } from 'react';
import { Carousel } from 'flowbite-react';
import { Get } from '../../components/request.js';

function CarouselHome() {
    const [carousel, setCarousel] = useState([]);
    const srcCarousel = 'http://localhost:3000/img/carousel';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Get('http://localhost:3000/v1/carousel/ativos');
                setCarousel(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {carousel.length > 0 && (
                <Carousel>
                    <div>asfsaf</div>
                    {carousel.map(carrossel => (
                        <img key={carrossel.id} src={`${srcCarousel}/${carrossel.img}`} alt="IMG CAROUSEL" />
                    ))}
                </Carousel>
            )}
        </div>
    );
}

export default CarouselHome;

const carrosselModel = require('../Models/carrosselModel');

async function getCarouselAtivos(req, res) {
    try {
        const data = await carrosselModel.getCarouselAtivos();

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor.');
    }
}

module.exports = {
    getCarouselAtivos
};
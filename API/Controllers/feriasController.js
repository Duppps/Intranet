const feriasModel = require('../Models/feriasModel');

async function getFeriantes(req, res) {
    try {
        const data = await feriasModel.getFeriantes();

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor.');
    }
}

module.exports = {
    getFeriantes
} ;
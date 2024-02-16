const vagasModel = require('../Models/vagasModel');

async function getVagas(req, res) {
    try {
        const data = await vagasModel.getVagas();

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor.');
    }
}

module.exports = {
    getVagas
};
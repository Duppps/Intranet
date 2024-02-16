const funcionariosModel = require('../Models/funcionariosModel');
const feriasModel = require('../Models/feriasModel');
const carrosselModel = require('../Models/carrosselModel');
const vagasModel = require('../Models/vagasModel.js');

async function getAllData(req, res) {
    try {
        const funcionarios = await funcionariosModel.getAll();        
        const feriantes = await feriasModel.getFeriantes();
        const carrossel = await carrosselModel.getCarouselAtivos();
        const vagas = await vagasModel.getVagas();

        const data = {
            funcionarios,            
            feriantes,
            carrossel,
            vagas
        };

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor.');
    }
}

module.exports = {
    getAllData
};

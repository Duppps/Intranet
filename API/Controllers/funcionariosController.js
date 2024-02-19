const funcionariosModel = require('../Models/funcionariosModel');

async function getAniversariantes(req, res) {
    try {
        const data = await funcionariosModel.getAniversariantes();

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor.');
    }
}

async function getProxAniversariantes(req, res) {
    try {
        const data = await funcionariosModel.getProxAniversariantes();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor.');
    }
}

async function getTempoEmpresa(req, res) {
    try {
        const data = await funcionariosModel.getProxAniversariantes();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor.');
    }
}

async function getAdmitidos(req, res) {
    try {
        const data = await funcionariosModel.getAdmitidos();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor.');
    }
}

async function getDesligados(req, res) {
    try {
        const data = await funcionariosModel.getDesligados();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor.');
    }
}

async function getAdministrativo(req, res) {
    try {
        const data = await funcionariosModel.getAdministrativo();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor.');
    }
}

async function getManutencao(req, res) {
    try {
        const data = await funcionariosModel.getManutencao();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor.');
    }
}

module.exports = {
    getAniversariantes,
    getProxAniversariantes,
    getTempoEmpresa,
    getAdmitidos,
    getDesligados,
    getAdministrativo,
    getManutencao
};
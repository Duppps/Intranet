const pool = require('../config');

const getCarouselAtivos = (req, res) => {
    const consulta = `SELECT * FROM carrossel WHERE ativo = 1`;

    pool.query(consulta, (error, results) => {
        if (error) {
            console.error('Erro ao obter carrosseis:', error);
            res.status(500).send('Erro interno do servidor.');
        } else {
            res.status(200).json(results);
        }
    });
};


module.exports = {
    getCarouselAtivos
};
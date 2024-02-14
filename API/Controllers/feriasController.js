const pool = require('../config');

const getFeriantes = (req, res) => {

    const consulta = `SELECT *, DATE_FORMAT(retorno, '%d/%m') AS retornoVisualizacao
                        FROM ferias
                        WHERE inicio <= CURRENT_DATE() AND retorno > CURRENT_DATE()
                        ORDER BY retorno`;

    pool.query(consulta, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erro interno do servidor.');
        } else {
            res.status(200).json(results);
        }
    });
};

module.exports = {
    getFeriantes
} ;
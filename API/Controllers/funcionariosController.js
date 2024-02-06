const pool = require('../config');

const getAniversariantes = (req, res) => {
    const status = req.query.status;

    let statusCondition = '';
    if (status === 'ativos') {
        statusCondition = ' AND desligado != 1';
    } else if (status === 'desligados') {
        statusCondition = ' AND desligado = 1';
    } else if (status === '') {
        statusCondition = '';
    }

    const consulta = `SELECT * FROM funcionarios tbl WHERE (MONTH(tbl.nascimento) = MONTH(NOW()) AND DAY(tbl.nascimento) = DAY(NOW()))${statusCondition}`;

    pool.query(consulta, (error, results) => {
        if (error) {
            console.error('Erro ao obter aniversariantes:', error);
            res.status(500).send('Erro interno do servidor.');
        } else {
            res.status(200).json(results);
        }
    });
};

const getProxAniversariantes = (req, res) => {
    const status = req.query.status;

    let statusCondition = '';
    
    if (status === 'ativos') {
        statusCondition = ' AND desligado != 1';
    } else if (status === 'desligados') {
        statusCondition = ' AND desligado = 1';
    } else if (status === '') {
        statusCondition = '';
    }

    const consulta = `SELECT *
                        FROM funcionarios
                        WHERE (DATE(CONCAT(YEAR(CURDATE()), RIGHT(nascimento, 6)))
                            BETWEEN 
                                DATE_ADD(CURDATE(), INTERVAL 1 DAY)
                            AND
                                DATE_ADD(CURDATE(), INTERVAL 12 DAY))
                            ${statusCondition}
                            ORDER BY MONTH(nascimento), DAY(nascimento)`;

    pool.query(consulta, (error, results) => {
        if (error) {
            console.error('Erro ao obter aniversariantes:', error);
            res.status(500).send('Erro interno do servidor.');
        } else {
            res.status(200).json(results);
        }
    });
}


module.exports = {
    getAniversariantes,
    getProxAniversariantes
};
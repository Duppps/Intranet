const pool = require('../config');

const getAniversariantes = (req, res) => {
    const status = req.query.status;

    let statusCondition = '';
    if (status === 'ativo') {
        statusCondition = ' AND desligado != 1';
    } else if (status === 'desligado') {
        statusCondition = ' AND desligado = 1';
    } else if (status === '') {
        statusCondition = '';
    }

    const consulta = `SELECT * FROM funcionarios tbl WHERE MONTH(tbl.nascimento) = MONTH(NOW()) AND DAY(tbl.nascimento) = DAY(NOW())${statusCondition}`;

    pool.query(consulta, (error, results) => {
        if (error) {
            console.error('Erro ao obter aniversariantes:', error);
            res.status(500).send('Erro interno do servidor.');
        } else {
            res.json(results);
        }
    });
};

const getProxAniversariantes = (req, res) => {
    const status = req.query.status;

    let statusCondition = '';
    if (status === 'ativo') {
        statusCondition = ' AND desligado != 1';
    } else if (status === 'desligado') {
        statusCondition = ' AND desligado = 1';
    } else if (status === '') {
        statusCondition = '';
    }

    const consulta = `SELECT * FROM funcionarios tbl WHERE MONTH(tbl.nascimento) = MONTH(NOW()) AND DAY(tbl.nascimento) = DAY(NOW()) + 25${statusCondition}`;

    pool.query(consulta, (error, results) => {
        if (error) {
            console.error('Erro ao obter aniversariantes:', error);
            res.status(500).send('Erro interno do servidor.');
        } else {
            res.json(results);
        }
    });
}


module.exports = {
    getAniversariantes,
    getProxAniversariantes
};
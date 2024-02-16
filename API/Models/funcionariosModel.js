const pool = require('../config');

function getAll() {
    const consulta = `SELECT nome, funcao, nascimento, admissao, desligado, data_deslig FROM funcionarios`;

    return new Promise((resolve, reject) => {
        pool.query(consulta, (error, results) => {
            if (error) {
                console.error(error);
                reject('Erro interno do servidor.');
            } else {
                resolve(results);
            }
        });
    });
}

function getAniversariantes() {
    const consulta = `SELECT * FROM funcionarios tbl WHERE (MONTH(tbl.nascimento) = MONTH(NOW()) AND DAY(tbl.nascimento) = DAY(NOW())) AND desligado != 1`;

    return new Promise((resolve, reject) => {
        pool.query(consulta, (error, results) => {
            if (error) {
                console.error(error);
                reject('Erro interno do servidor.');
            } else {
                resolve(results);
            }
        });
    });
};

function getProxAniversariantes() {
    const consulta = `
                    SELECT *, DATE_FORMAT(nascimento, '%d/%m') AS dataView
                        FROM funcionarios
                        WHERE (DATE(CONCAT(YEAR(CURDATE()), RIGHT(nascimento, 6)))
                            BETWEEN 
                                DATE_ADD(CURDATE(), INTERVAL 1 DAY)
                            AND
                                DATE_ADD(CURDATE(), INTERVAL 12 DAY))
                            AND desligado != 1
                            ORDER BY MONTH(nascimento), DAY(nascimento)`;

    return new Promise((resolve, reject) => {
        pool.query(consulta, (error, results) => {
            if (error) {
                console.error(error);
                reject('Erro interno do servidor.');
            } else {
                resolve(results);
            }
        });
    });
}

function getTempoEmpresa() {
    const consulta = `
                    SELECT *, CONCAT(FLOOR(DATEDIFF(NOW(), admissao) / 365), ' anos') AS dataView
                    FROM funcionarios tbl 
                    WHERE 
                        (MONTH(tbl.admissao) = MONTH(NOW()) AND DAY(tbl.admissao) = DAY(NOW()))
                        AND desligado != 1`;


    return new Promise((resolve, reject) => {
        pool.query(consulta, (error, results) => {
            if (error) {
                console.error(error);
                reject('Erro interno do servidor.');
            } else {
                resolve(results);
            }
        });
    });
}

function getAdmitidos() {
    const consulta = `
                    SELECT * 
                        FROM funcionarios 
                        WHERE desligado != 1 
                            AND admissao BETWEEN DATE_SUB(CURRENT_DATE(), INTERVAL 6 DAY) AND CURRENT_DATE() 
                        ORDER BY admissao DESC;`;


    return new Promise((resolve, reject) => {
        pool.query(consulta, (error, results) => {
            if (error) {
                console.error(error);
                reject('Erro interno do servidor.');
            } else {
                resolve(results);
            }
        });
    });
}

function getDesligados() {
    const consulta = `
                    SELECT * 
                        FROM funcionarios 
                        WHERE desligado != 0 
                            AND data_deslig BETWEEN DATE_SUB(CURRENT_DATE(), INTERVAL 6 DAY) AND CURRENT_DATE() 
                        ORDER BY data_deslig DESC`;

    return new Promise((resolve, reject) => {
        pool.query(consulta, (error, results) => {
            if (error) {
                console.error(error);
                reject('Erro interno do servidor.');
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    getAniversariantes,
    getProxAniversariantes,
    getTempoEmpresa,
    getAdmitidos,
    getDesligados,
    getAll
};

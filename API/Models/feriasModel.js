const pool = require('../config');

function getFeriantes() {
    const consulta = `
                    SELECT *, CONCAT('Retorno ', DATE_FORMAT(retorno, '%d/%m')) AS dataView
                        FROM ferias
                        WHERE inicio <= CURRENT_DATE() AND retorno > CURRENT_DATE()
                        ORDER BY retorno`;
                        
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
    getFeriantes
};

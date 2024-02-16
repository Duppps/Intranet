const pool = require('../config');

function getFeriantes() {
    const consulta = `
                    SELECT *
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

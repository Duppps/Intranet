const pool = require('../config');

function getVagas() {
    const consulta = `SELECT * FROM vagas_abertas WHERE status = '1' ORDER BY id_filial`;
                        
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
    getVagas
};

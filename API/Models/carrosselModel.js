const pool = require('../config');

function getCarouselAtivos() {
    const consulta = `SELECT * FROM carrossel WHERE ativo = 1`;
                        
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
    getCarouselAtivos
};

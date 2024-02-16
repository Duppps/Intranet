const Data = require('../Utils/Date.js');

const funcionariosModel = require('../Models/funcionariosModel');
const feriasModel = require('../Models/feriasModel');
const carrosselModel = require('../Models/carrosselModel');
const vagasModel = require('../Models/vagasModel.js');

async function getAllData(req, res) {
    try {
        const funcionarios = await funcionariosModel.getAll();         

        const aniversariantes = funcionarios
            .filter(funcionario => {
                const aniversariante = Data.dmCompareDates(new Date(), funcionario.nascimento);

                return aniversariante && (funcionario.desligado != 1);
            });

        const proxAniversariantes = funcionarios
            .filter(funcionario => {
                const dataEncontrada = Data.searchBetweenTodayAndInterval(funcionario.nascimento, 12, true);
                return (
                    dataEncontrada && funcionario.desligado !== 1
                );
            })
            .map(funcionario => {
                const dataNascimento = Data.formatDateToDM(funcionario.nascimento);
                return {
                    ...funcionario,
                    dataView: dataNascimento
                };
            })
            .sort((a, b) => {
                return a.dataView.localeCompare(b.dataView);
            });

        const tempoEmpresa = funcionarios
            .filter(funcionario => {
                const tempoEmpresa = Data.dmCompareDates(new Date(), funcionarios.admissao);

                return tempoEmpresa && (funcionario.desligado != 1);
            });

        const admitidos = funcionarios
            .filter(funcionario => {
                const dataEncontrada = Data.searchBetweenTodayAndInterval(funcionario.admissao, -12);
                return (
                    dataEncontrada && funcionario.desligado !== 1
                );
            })
            .sort((a, b) => {
                return b.admissao - a.admissao;
            });

            const desligados = funcionarios
            .filter(funcionario => {
                const dataEncontrada = Data.searchBetweenTodayAndInterval(funcionario.data_deslig, -6);
                return (
                    dataEncontrada
                );
            })
            .sort((a, b) => {
                return b.data_deslig - a.data_deslig;
            });
        
        const feriantes = await feriasModel.getFeriantes();
        const carrossel = await carrosselModel.getCarouselAtivos();
        const vagas = await vagasModel.getVagas();

        const data = {
            aniversariantes,
            proxAniversariantes,
            tempoEmpresa,
            admitidos,
            desligados,
            feriantes,
            carrossel,
            vagas
        };

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor.');
    }
}

module.exports = {
    getAllData
};

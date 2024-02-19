const funcionariosModel = require('../Models/funcionariosModel');
const feriasModel = require('../Models/feriasModel');
const carrosselModel = require('../Models/carrosselModel');
const vagasModel = require('../Models/vagasModel.js');

const Funcionario = require('../Utils/Funcionario.js');
const Data = require('../Utils/Date.js');

async function getAllData(req, res) {
    try {
        const funcionarios = await funcionariosModel.getAll();
        const feriantesAll = await feriasModel.getFeriantes();
        const carrossel = await carrosselModel.getCarouselAtivos();
        const vagasAll = await vagasModel.getVagas();

        const aniversariantes = [];
        const proxAniversariantes = [];
        const tempoEmpresa = [];
        const admitidos = [];
        const desligados = [];
        const vagas = [];
        const feriantes = [];

        funcionarios.forEach(funcionario => {
            const parameters = {
                id: funcionario.id,
                nome: funcionario.nome,
                funcao: funcionario.funcao,
                nascimento: funcionario.nascimento,
                admissao: funcionario.admissao,
                desligado: funcionario.desligado,
                data_deslig: funcionario.data_deslig
            }

            dadosFuncionarios = new Funcionario(parameters).employerDetails();

            if (dadosFuncionarios.aniversariante === true && funcionario.status !== 1) {
                aniversariantes.push({
                    id: funcionario.id,
                    titulo: funcionario.nome,
                    descricao: funcionario.funcao
                });
            }

            if (dadosFuncionarios.aniversarioProximo === true && funcionario.status !== 1) {
                proxAniversariantes
                    .push({
                        id: funcionario.id,
                        titulo: funcionario.nome,
                        descricao: funcionario.funcao,
                        view: funcionario.data_aniversario,
                        nascimentoSemAno: Data.resetYear(funcionario.data_aniversario)
                    });
            }

            if (dadosFuncionarios.aniversarioEmpresa === true && funcionario.status !== 1) {
                tempoEmpresa
                    .push({
                        id: funcionario.id,
                        titulo: funcionario.nome,
                        descricao: funcionario.funcao,
                        view: funcionario.tempo_empresa
                    });
            }

            if (dadosFuncionarios.recemAdmitido === true && funcionario.status !== 1) {
                admitidos
                    .push({
                        id: funcionario.id,
                        titulo: funcionario.nome,
                        descricao: funcionario.funcao
                    });
            }

            if (dadosFuncionarios.recemDesligado === true) {
                desligados
                    .push({
                        id: funcionario.id,
                        titulo: funcionario.nome,
                        descricao: funcionario.funcao
                    });
            }
        });

        vagasAll.forEach(objeto => {
            vagas.push({
                id: objeto.id,
                titulo: objeto.titulo_cargo,
                descricao: '',
                view: objeto.titulo_filial
            })
        });

        feriantesAll.forEach(objeto => {
            const retornoFormatado = Data.formatDateToDM(objeto.retorno);
            feriantes.push({
                id: objeto.id,
                titulo: objeto.nome,
                descricao: objeto.funcao,
                view: retornoFormatado
            })
        })

        proxAniversariantes.sort((a, b) => {
            const dataA = Data.resetYear(a.nascimentoSemAno);
            const dataB = Data.resetYear(b.nascimentoSemAno);

            return dataA - dataB;
        });

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

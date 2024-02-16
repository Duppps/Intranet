const funcionariosModel = require('../Models/funcionariosModel');
const feriasModel = require('../Models/feriasModel');
const carrosselModel = require('../Models/carrosselModel');

function formataData(data) {
    options = {
        month: 'numeric',
        day: 'numeric'
    }

    const dataFinal = new Date(data).toLocaleDateString('pt', options);
    return dataFinal;
}

function zerarAno(data) {
    const dataZerada = new Date(data);
    dataZerada.setFullYear(1970);
    return dataZerada.getTime();
}

async function getAllData(req, res) {
    try {
        const funcionarios = await funcionariosModel.getAll();
        const hoje = new Date();
        const hojeFormatado = formataData(hoje);

        const proxDias = new Date(hoje);
        proxDias.setDate(hoje.getDate() + 12);

        const hojeTime = zerarAno(hoje);
        const prxDias = zerarAno(proxDias);

        const aniversariantes = funcionarios
            .filter(funcionario => {
                const diaAniversario = formataData(funcionario.nascimento);

                return (diaAniversario === hojeFormatado) && (funcionario.desligado != 1);
            });

        const proxAniversariantes = funcionarios
            .filter(funcionario => {
                const aniversarioTime = zerarAno(funcionario.nascimento);
                return (
                    aniversarioTime > hojeTime && aniversarioTime <= prxDias && funcionario.desligado !== 1
                );
            })
            .map(funcionario => {
                const dataNascimento = formataData(funcionario.nascimento);
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
                const diaTempoEmpresa = formataData(funcionario.admissao);

                return (diaTempoEmpresa === hojeFormatado) && (funcionario.desligado != 1);
            });

        const admitidos = await funcionariosModel.getAdmitidos();
        const desligados = await funcionariosModel.getDesligados();
        const feriantes = await feriasModel.getFeriantes();
        const carrossel = await carrosselModel.getCarouselAtivos();

        const data = {
            aniversariantes,
            proxAniversariantes,
            tempoEmpresa,
            admitidos,
            desligados,
            feriantes,
            carrossel
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

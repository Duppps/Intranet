import Data from './Date.js';

class Funcionario {
    constructor({ id, nome, funcao, nascimento, admissao, desligado, data_deslig }) {
        this.id = id;
        this.nome = nome;
        this.funcao = funcao;
        this.nascimento = nascimento;
        this.admissao = admissao;
        this.desligado = desligado;
        this.data_deslig = data_deslig;
    }

    employerDetails() {
        const anosDeEmpresa = Data.ExtractYear(this.admissao);
        const tempoEmpresa = anosDeEmpresa === 1 ? `${anosDeEmpresa} Ano` : `${anosDeEmpresa} Anos`;
        return {
            id: this.id,
            nome: this.nome,
            funcao: this.funcao,
            data_aniversario: Data.formatDateToDM(this.nascimento),
            tempo_empresa: tempoEmpresa,
            aniversariante: this.Birthday(),
            aniversarioProximo: this.BirthdayNext12Days(),
            aniversarioEmpresa: this.companyAnniversary(),
            recemAdmitido: this.NewlyAdmitted(),
            recemDesligado: this.NewlyFired()
        };
    }

    Birthday() {
        return Data.dmCompareDates(new Date(), this.nascimento);
    }

    BirthdayNext12Days() {
        return Data.searchBetweenTodayAndInterval(this.nascimento, 12, true);
    }

    companyAnniversary() {
        return Data.dmCompareDates(new Date(), this.admissao);
    }

    NewlyAdmitted() {
        return Data.searchBetweenTodayAndInterval(this.admissao, -12);
    }

    NewlyFired() {
        return Data.searchBetweenTodayAndInterval(this.data_deslig, -6);
    }
}

export default Funcionario;

class Data {
    static formatDateToDM(data) {
        const options = {
            month: 'numeric',
            day: 'numeric'
        }

        const dataFinal = new Date(data).toLocaleDateString('pt', options);
        return dataFinal;
    }

    /**
     * Retorna um timestamp representando a data com o ano zerado.
     * @param data A data a ser zerada.
     * @returns Um timestamp representando a data com o ano zerado.
     */
    static resetYear(data) {
        const dataZerada = new Date(data);
        dataZerada.setFullYear(1970);
        return dataZerada.getTime();
    }

    /**
     * Verifica se uma data está dentro do intervalo de hoje e outra data especificada (DM)
     * @param data A data a ser procurada.
     * @param interval Intervalo de dias.
     * @param ignoreYear Default false, true caso ignorar o ano durante a verificação.
     * @returns True se foi encontrada ou False se não.     * 
     */
    static searchBetweenTodayAndInterval(data, interval, ignoreYear = false) {
        const hoje = new Date();

        const proxDias = new Date(hoje);
        proxDias.setDate(proxDias.getDate() + interval);

        if (ignoreYear) {
            const hojeTime = this.resetYear(hoje);
            const prxDias = this.resetYear(proxDias);
            const aniversarioTime = this.resetYear(data);

            if (interval < 0) {
                if (aniversarioTime < hojeTime && aniversarioTime >= prxDias) {
                    return true;
                } else {
                    return false;
                }
            } else {
                if (aniversarioTime > hojeTime && aniversarioTime <= prxDias) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            const dataTime = new Date(data).getTime();
            const hojeTime = hoje.getTime();
            const proxDiasTime = proxDias.getTime();
            
            if (interval < 0) {
                if (dataTime < hojeTime && dataTime >= proxDiasTime) {
                    return true;
                } else {
                    return false;
                }
            } else {
                if (data > hoje && data <= proxDias) {
                    return true;
                } else {
                    return false;
                }
            }
        }

    }

    /**
     * Verifica se as datas no formato DD/MM são iguais (exemplo de aniversário)
     * @param data1 Parâmetro de qualquer data
     * @param data2 Parâmetro de qualquer data
     * @returns True se a data é a mesma e false se não
     */
    static dmCompareDates(data1, data2) {
        const data1Formatado = Data.formatDateToDM(data1);
        const data2Formatado = Data.formatDateToDM(data2);

        if (data1Formatado === data2Formatado) {
            return true;
        } else {
            return false;
        }
    }

    static ExtractYear(date) {
        const tempoDeEmpresa = new Date() - new Date(date);
        const milissegundosEmUmAno = 1000 * 60 * 60 * 24 * 365;
        const anosDeEmpresa = Math.floor(tempoDeEmpresa / milissegundosEmUmAno);
        return anosDeEmpresa;
    }
}

module.exports = Data;
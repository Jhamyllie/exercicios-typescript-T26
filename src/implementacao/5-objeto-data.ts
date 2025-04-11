function criaObjeto(data: string) {
    const [dia, mes, ano] = data.split('/');
    return {
        dia: dia,
        mes: mes,
        ano: ano
    };

    }

module.exports = criaObjeto;

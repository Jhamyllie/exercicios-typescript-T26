function apuraVotacao(votos: number[]): string {
    let contagem = {
        1: 0, 
        2: 0,
        3: 0,
    };

    let indice = 0;
    while (votos[indice] !== undefined) {
        if (votos[indice] === 1) {
            contagem[1]++;
        }else if (votos[indice] === 2) {
            contagem[2]++;
        }else if (votos[indice] === 3) {
            contagem[3]++;
        }
        indice++;
    }
        if (contagem[1] > contagem [2] && contagem [1] > contagem [3]) {
            return "Vencedor: 1";
        } else if (contagem[2] > contagem[1] && contagem [2] > contagem[3]) {
            return "Vencedor: 2";
        }else if (contagem[3] > contagem[1] && contagem[3] > contagem[2]) {
            return "Vencedor: 3";
        }else {
            return "Empate"
        }                    
    }

module.exports = apuraVotacao;

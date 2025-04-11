function contadorDeOcorrencia(texto: string, letra: string): number {
    let i = 0;
    let contador = 0;

    while(texto[i] !== undefined){
        if(texto[i] === letra){
            contador ++
        }

        i++
    }

    return contador;
}
module.exports = contadorDeOcorrencia;
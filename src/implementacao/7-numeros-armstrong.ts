function numerosArmstrong(numero: number) {
  let numeroOriginal = numero;
  let quantidadeDeAlgarismos = 0;
  let copiaDoOriginal = numero;

  while(copiaDoOriginal > 0){
    quantidadeDeAlgarismos = quantidadeDeAlgarismos + 1;
    copiaDoOriginal = (copiaDoOriginal-(copiaDoOriginal % 10)) / 10;
  }

  let soma = 0;
  copiaDoOriginal = numero;

  while(copiaDoOriginal > 0){
    let algarismo = copiaDoOriginal % 10;

    let potencia = 1;
    let contador = 0

    while(contador< quantidadeDeAlgarismos){
      potencia = potencia * algarismo;
      contador = contador + 1;
    }

    soma = soma + potencia;
    copiaDoOriginal  = (copiaDoOriginal -(copiaDoOriginal%10)) / 10
  }

  if(soma === numeroOriginal){
    return "Este eh um numero de Armstrong!"
  } else{
    return "Este nao eh um numero de Armstrong!"
  }
}
module.exports = numerosArmstrong;
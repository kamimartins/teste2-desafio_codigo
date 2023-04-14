//1) Ao final do processamento, qual será o valor da variável SOMA?
console.log(
  '1) RE: A repetição do laço, o valor SOMA é incrementado com o seu valor atual e o valor atual de k, o laço termina quando o valor de k for maior ou igual ao INDICE 13'
);
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}
console.log(`RE: SOMA = ${SOMA}`);
console.log('');

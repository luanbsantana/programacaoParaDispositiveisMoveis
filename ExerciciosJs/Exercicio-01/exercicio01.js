//Exercício 1: Manipulação de Strings
//Crie um script que receba uma string e faça as seguintes operações:
//1. Converta a string para maiúsculas.
let string = "trasformar";
console.log(string.toUpperCase());
//2. Converta a string para minúsculas.
console.log(string.toLowerCase())
//3. Inverta a string.
let inverter = []
for(index = string.length-1; index >= 0 ; index--){
    inverter = inverter + string[index];
}
console.log(inverter)
//4. Substitua todas as ocorrências de uma letra específica por outra.
let substitua = string.replace("a", "e");
console.log(substitua)




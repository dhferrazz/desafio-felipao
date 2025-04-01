let heroi = "Daniel";
let xp = 0;
let nivel = ""


if (xp <=1000){
    nivel = "ferro"
}
if (xp >=1001){
    nivel = "bronze"
}
if (xp >=2001){
    nivel = "prata"
}
if (xp >=5001){
    nivel = "ouro"
}
if (xp >=7001){
    nivel = "platina"
}
if (xp >=8001){    
    nivel = "Ascendente"
}
if (xp >=9001){
    nivel = "imortal"
}
if (xp >=10001){
    nivel = "radiante"
}

console.log ("o super heroi " + heroi + " esta no nivel " + nivel)
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante
//## Saída
//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"
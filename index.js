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
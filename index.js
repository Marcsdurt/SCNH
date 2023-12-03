let nome = "Felipe"
let qntdXP = 10001
let nivel

if(qntdXP<=1000){
    nivel = "Ferro"
}else if(qntdXP>=1001 && qntdXP<=2000){
    nivel = "Bronze"
}else if(qntdXP>=2001 && qntdXP<=5000){
    nivel = "Prata"
}else if(qntdXP>=6001 && qntdXP<=7000){
    nivel = "Ouro"
}else if(qntdXP>=7001 && qntdXP<=8000){
    nivel = "Platina"
}else if(qntdXP>=8001 && qntdXP<=9000){
    nivel = "Ascendente"
}else if(qntdXP>=9001 && qntdXP<=10000){
    nivel = "Imortal"
}else{
    nivel = "Radiante"
}

console.log("O Herói de nome "+ nome + " está no nível de " + nivel)

var readline = require('readline-sync')

let nomeHeroi = readline.question("Digite o nome do Heroi: ")
let xpHeroi = Number(readline.question("Qual o XP do Heroi?: "))
let nivelHeroi

if(xpHeroi <= 1000){
    nivelHeroi = "Ferro"
}
else if(xpHeroi > 1000 && xpHeroi <= 2000){
    nivelHeroi = "Bronze"
}
else if(xpHeroi > 2000 && xpHeroi <= 5999){
    nivelHeroi = "Prata"
}
else if(xpHeroi > 6000 && xpHeroi <= 7000){
    nivelHeroi = "Ouro"
}
else if(xpHeroi > 8000 && xpHeroi <= 9000){
    nivelHeroi = "Platina"
}
else if(xpHeroi > 9000 && xpHeroi <= 10000){
    nivelHeroi = "Imortal"
}
else{
    nivelHeroi = "Radiante"
}

console.log("O Herói " + nomeHeroi + " está no nível de " + nivelHeroi)

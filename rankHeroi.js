function rank(victory, defeat){
	return (victory - defeat)
}

function level(ranked){
	if(ranked < 10){ 
		return("Ferro");
	}else if(ranked >= 10 && ranked <= 20){
		return("Bronze");
	}else if(ranked >= 21 && ranked <= 50){
		return("Prata");
	}else if(ranked >= 51 && ranked <= 80){
		return("Ouro");
	}else if(ranked >= 81 && ranked <= 90){
		return(Diamante);
	}else if(ranked >= 91 && ranked <= 100){
		return("Lendário");
	}else if(ranked >= 101){
		return("Imortal");
	}
	else{
		return("Desconhecido");
	
	}
}
balance = rank(100, 52)
lv = level(balance)
console.log("O herói tem saldo de " + balance + " e está no nível de " + lv + ".")
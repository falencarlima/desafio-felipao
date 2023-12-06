/*
*	Classe javascript para representar o herói e o tipo de ataque
*   Autor: Fábio Alencar Lima
*	Data: 06/12/2023
*/


//Classe que representa um herói
class Heroi{
	constructor(nome, idade, tipo){
		this.nome = nome;
		this.idade = idade;
		this.tipo = tipo;
	}
	//retorna o tipo de ataque
	tipoAtaque(tipo){
		switch (tipo){
			case "guerreiro":
				return "espada";
			case "mago":
				return "magia";
			case "monge":
				return "artes marciais";
			case "ninja":
				return "shurikens";
			default :
				break;
		}	
	//retorna um vetor com o tipo de herói e o tipo de ataque
	}
	get atacar(){
		return([this.tipo, this.tipoAtaque(this.tipo)])
	}
}
const message = " atacou usando ";
const heroi = new Heroi("Jaja", "33", "ninja");

let atacar = heroi.atacar;

console.log("O " + atacar[0] + message + atacar[1]);

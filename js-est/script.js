let num1 = prompt('primeiro numero: ')
let num2 = prompt('segundo numero: ')

let num11 = parseInt(num1) 
let num22 = parseInt(num2)

function soma(atr1, atr2){
	let resultado = atr1 + atr2

	alert('o resultado entre: '+ atr1 +' + '+ atr2 +' = '+ resultado)
}

function multiplica(atr1, atr2){
	let resultado = atr1 * atr2

	alert('o resultado entre: '+ atr1 +' * '+ atr2 +' = '+ resultado)
}

let operacao = prompt('qual a operação em simbolo (+, -, *, /): ')
if(operacao == '+'){
	soma(num11, num22)
}

else if(operacao == '*'){
	multiplica(num11, num22)
}


const ask = require('readline-sync')

let numero1 = Number(ask.question('Digite um numero:'))
let numero2 = Number(ask.question('Digite o segundo numero:'))
let resultado
let calculadoraFuncionando = true

while(calculadoraFuncionando){
    let opcao = Number(ask.question(`
Digite:
1 para soma 
2 para divisao 
3 para multiplicacao 
4 para subtracao 
5 para resto
6 para sair 
7 para trocar de numero 
Seu input: `))
    switch(opcao){
        case 1:
            resultado = (numero1 + numero2)
            console.log(`seu resultado deu ${resultado}`)
            break
        case 2:
            resultado = (numero1 / numero2)
            console.log(`seu resultado deu ${resultado}`)
            break
        case 3:
            resultado = (numero1 * numero2)
            console.log(`seu resultado deu ${resultado}`)
            break
        case 4:
            resultado = (numero1 - numero2)
            console.log(`seu resultado deu ${resultado}`)
            break
        case 5:
            resultado = (numero1 % numero2)
            console.log(`seu resultado deu ${resultado}`)
            break 
        case 6:
            calculadoraFuncionando = false
            break
        case 7:
            numero1 = Number(ask.question('Digite um numero:'))
            numero2 = Number(ask.question('Digite o segundo numero:'))
            opcao = Number(ask.question(`
Digite:
1 para soma 
2 para divisao 
3 para multiplicacao 
4 para subtracao 
5 para resto
6 para sair 
7 para trocar de numero 
Seu input: `))
            console.log(`seu resultado deu ${resultado}`)
            break
        default:
            console.log('Erro no sistema')
            break
    }
    ask.question('Aperte enter para continuar')
    console.clear()
 }

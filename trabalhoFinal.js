const ask = require('readline-sync')

let codigoFuncionando = true 
let arrayDeDoador = [] 

while(codigoFuncionando){
    console.clear()
    menuPrincipal()
    let menu = Number(ask.question('selecione a opcao: '))
    switch(menu){ 
    
      case 1: 
         cadastrarDoador()
         break 
      case 2: 
         listaDeDoador() 
         break
      case 3: 
         buscarTipoSanguineo()
         break
       case 4: 
        buscarUltimaData()
        break 
      case 5: 
        codigoFuncionando = false 
        break 
    default:
        console.log('opcao invalida')
    } 
}

function cadastrarDoador() {
    console.clear()
    const objetoDoDoador = { 
        nomeDoador: ask.question('Digite seu nome:  '),
        idadeDoador: Number(ask.question('Digite sua idade:  ')),
        pesoDoador: Number(ask.question('Digite o seu peso:  ')),
        tipoSanguineoDoador: ask.question('Digite seu tipo sanguineo:  '),
        ultimaDoacaoDoador: {
            dia: Number(ask.question('Ultimo dia da sua ultima doacao: ')),
            mes: Number(ask.question('Ultimo mes da sua ultima doacao: ')),
            ano: Number(ask.question('Ultimo ano da sua ultima doacao: '))
        } 
    }
    arrayDeDoador.push(objetoDoDoador)
    console.clear()
}


function listaDeDoador() {

    console.clear()
    console.log(`
NOME           | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
--------------------------------------------------------------
`)

    for (let doador of arrayDeDoador) {
console.log(`${doador.nomeDoador} | ${doador.idadeDoador} | ${doador.pesoDoador}kg | ${doador.tipoSanguineoDoador} | ${doador.ultimaDoacaoDoador.dia}/${doador.ultimaDoacaoDoador.mes}/${doador.ultimaDoacaoDoador.ano}`);

    }
    ask.question('Tecle ENTER para continuar...')
}


function buscarTipoSanguineo(){
    console.clear()
let doador = ask.question('Qual tipo sanguineo voce quer?: ')

for( let doadores of arrayDeDoador)
    if(doadores.tipoSanguineoDoador === doador){
        console.log(doadores)
    }
    ask.question('Tecle ENTER para continuar...')
} 


function buscarUltimaData(){ 
    console.clear()
    
    let dia = Number(ask.question('Dia da ultima doacao que voce quer achar?: '))
    let mes = Number(ask.question('Mes da ultima doacao que voce quer achar?: '))
    let ano = Number(ask.question('Ano da ultima doacao que voce quer achar?: '))

    for(let doadores of arrayDeDoador){
        let dataDoacao = doadores.ultimaDoacaoDoador  

       if((dataDoacao.ano < ano) || (dataDoacao.ano === ano && dataDoacao.mes < mes) || (dataDoacao.ano === ano && dataDoacao.mes === mes && dataDoacao.dia <= dia)){
    console.log(doadores)
       } 
    }
    ask.question('Tecle ENTER para continuar...')
    
}

function menuPrincipal(){
    console.log(` 
        //////MENU PRINCIPAL//////
        [1]- Cadrastrar doador
        [2]- Listar doadores
        [3]- Buscar doador por tipo sanguineo
        [4]- Buscar doador por data da ultima doacao
        [5]- Sair 
        `)
    
}
function VerificaSeOChuteEValido (chute) {
    const numero = +chute

    if (chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Invalido</div>'
        return
    }

    if (numeroMaiorOuMenorPermetido(numero)){
        elementoChute.innerHTML += `<div>O número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>VOCÊ ACERTOU!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3> 

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-chevron-down fa-bounce"></i></i> </div>`
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-chevron-up fa-bounce"></i></i> </div>`
    }
    }

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorPermetido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload ()
    }
})

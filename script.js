let valores = []

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
}

function adcionar() {
    var num = document.getElementById('txtn')
    var val = document.getElementById('selval')
    var n = Number(num.value)

    if ((n <= 0) || (n > 100) || inLista(num.value, valores)) {
        window.alert('Valor inválido ou já encontrado na lista!')

    } else {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${n} adcionado`
        val.appendChild(item)
        res.innerHTML = ''
        num.value = ''
        num.focus()
    }
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adcione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado  foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

function zerar() {
    var val = document.getElementById('selval')
    valores.length = 0
    val.innerHTML = ''
    res.innerHTML = ''
    num.focus()
}
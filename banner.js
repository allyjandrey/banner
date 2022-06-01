var pontos = document.querySelectorAll('.pontos')
var quantidade = document.querySelectorAll('.carrossel .imagens')
var atual = 0
var imagem = document.getElementById('atual')
var avancar = document.getElementById('avancar')
var voltar = document.getElementById('voltar')
var posicao = document.querySelectorAll('.pontos div')
var passar = true

for (let i = 0; i < quantidade.length; i++) {
    var div = document.createElemenet('div')
    div.id = i
    pontos.appendChild(div)
}

document.getElementById('0').classList.add('.imagemAtual')

for (let i = 0; i < quantidade.length; i++) {
    posicao[i].addEventListener ('click', () => {
        atual = posicao[i].id
        passar = false
        carrossel()
    })
}

avancar.addEventListener ('click', () => {
    atual++
    passar = false
    carrossel()
})

voltar.addEventListener ('click', () => {
    atual--
    passar = false
    carrossel()
})

function carrossel() {
    if(atual >= quantidade.length) {
        atual = 0
    } else if (atual < 0) {
        atual = quantidade.length-1
    }
    document.querySelector('.imagemAtual').classList.remove('imagemAtual')
    imagem.style.marginLeft = -1024*atual+'px'
    document.getElementById(atual).classList.add('imagemAtual')
}

setInterval(() => {
    if(passar){
    atual++
    carrossel()
    } else {
        passar = true
    }
}, 4000)

carrossel()
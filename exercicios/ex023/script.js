let num = document.getElementById('num')
let tela = document.getElementById('tela')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n)>= 1 && Number(n)<=100){
        return true
    } else {
        return false
    }
} 
function inLista(n, l){
    if (l.indexOf(Number(n))!= -1){
        return true 
    } else{
        return false
    }
}
function adicionar(){
    let n = Number(num.value)
        if (isNumero(num.value) && !inLista(num.value, valores)){
            alert('tudo ok')
        } else{
            alert('Valor inválido ou já encontrado na lista.')
        }
}
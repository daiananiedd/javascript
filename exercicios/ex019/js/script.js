function contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('pas')
    var res =document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length ==0 || pas.value.length == 0){
        //res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] FALTAM DADOS')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0){
            alert('Passo inválido. Considerando PASSO 1')
            p = 1
        }
        if (i<f){
            //contagem crescente.
            for (var c = i ; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            } 
        } else {
            //contagem decrescente.
            for (let c = i; c >= f; c -= p){ 
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F6A9}`
        }
        
    }
}
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length== 0 || Number(fano.value)>ano){
        window.alert('ERRO: Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade>=0 && idade<=10){
                //criança
                img.setAttribute('src','criancah.jpg')
            } else if (idade<=21){
                //jovem
                img.setAttribute('src','jovemh.jpg')
            } else if (idade>21 && idade<=50){
                //adulto
                img.setAttribute('src','adultoh.jpg')
            } else {
                //idoso
                img.setAttribute('src','velhoh.jpg')
            }
        } else{
            genero = 'mulher'
            if (idade>=0 && idade<=10){
                //criança
                img.setAttribute('src','criancam.jpg')
            } else if (idade<=21){
                //jovem
                img.setAttribute('src','jovemm.jpg')
            } else if (idade>21 && idade<=50){
                //adulto
                img.setAttribute('src','adultom.jpg')
            } else {
                //idoso
                img.setAttribute('src','velhom.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
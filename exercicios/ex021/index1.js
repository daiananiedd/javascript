let valores = [8, 2, 7, 9]
valores.sort()

/* 
forma burrakk
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
*/

/* 
forma comum:
for (let pos = 0; pos<valores.length ; pos ++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 
*/

//forma simplificada:
for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//buscar valores em arrays:
//(senão tiver retorna -1)
let num = valores.indexOf(8)
if (num == -1){
    console.log(`O valor não foi encontrado`)
} else{
    console.log(`O valor 8 está na posição ${num}`)
}



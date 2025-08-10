/* let sumatoria = 0

sumatoria de 3 numeros


for( i = 1; i <= 3; i = i + 1 ){
    let numero = prompt("ingrese un numero")
    while(numero === "" || numero === null || isNaN(numero)){
        alert("debe ingresar un numero")
        numero = prompt("ingresa un numero")
    }
    sumatoria = sumatoria + Number(numero)
}
alert("resultado: " + sumatoria) */



/* Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: a) La cantidad de valores negativos ingresados. b) La cantidad de valores positivos ingresados.
 */





let valor_entero = 0

for( i = 1; i <= 10; i = i + 1){
    let valor_solicitado = prompt("ingrese un numero entero")
    while(valor_solicitado === "" || valor_solicitado === null || isNaN(valor_solicitado)){
        alert("numero invalido")
        valor_solicitado = prompt("ingrese un caracter válido")
    }

}




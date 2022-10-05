addEventListener("DOMContentLoaded",()=>{
// Ejercicio 2
    //2. Hacer un algoritmo que al ingresar 2 números por la pantalla y se calcule la suma, resta, multiplicación
    //y división. El proceso debe terminar cuando se hallan realizado 10 procesos (Hacer uso de
    //contadores).
    
    n=0
    while (n<10){
        num1=Number(prompt("Ingrese el numero 1: "))
        num2=Number(prompt("Ingrese el numero 2: "))
        
        suma=num1+num2
        rest=num1-num2 
        multi=num1*num2 
        div=num1/num2
        
        alert(`La suma de ${num1} + ${num2} es= ${suma}`)
        alert(`La resta de ${num1} - ${num2} es= ${rest}`)
        alert(`la multiplicacion de ${num1} * ${num2} es= ${multi}`)
        alert(`La division de ${num1} / ${num2} es= ${div}`)
        n+=1

    }
})
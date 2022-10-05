addEventListener("DOMContentLoaded",()=>{
// Ejercicio 3
    //Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso de computación.
    
    d=0
    while (d<5){
        d++
        nom=prompt("Ingrese su Nombre y Apellido: ")
        edad=prompt("Ingrese su Edad: ")
        n1=Number(prompt("Coloque la nota 1: "))
        n2=Number(prompt("Coloque la nota 2: "))
        n3=Number(prompt("Coloque la nota 3: "))
        
        prom=(n1+n2+n3)/3

        console.log(`El promedio del estudiante ${nom} con ${edad} años de edad es: ${prom} `)
    }
})
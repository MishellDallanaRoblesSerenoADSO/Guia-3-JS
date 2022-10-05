addEventListener("DOMContentLoaded",()=>{
// Ejercicio 1
    // # En una granja se requiere saber alguna información para determinar el precio de venta por cada kilo 
    // # de huevo. precio se determina a traves del promedio de calidad de las N gallinas que hay en la
    // # granja. La calidad de cada gallina se obtiene según la formula:

    n1=0
    let numg=Number(prompt("Cantidad de gallinas que quiere saber su calidad: "))

    while (n1<numg){
        n1++;

        cant_h=prompt("Cantidad de huevos que pone la gallina: ")
        p=prompt("Peso de la gallina: ")
        a=prompt("Altura de la gallina: ")
    
        calidad=(p*a)/cant_h
    console.log(`El precio de venta por kilo es ${calidad}`)
    }
})
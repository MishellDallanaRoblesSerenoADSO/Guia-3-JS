addEventListener("DOMContentLoaded",()=>{
// Ejercicio 4
    //42 personas toman parte de un baile. Durante la fiesta una dama bailó con 7 caballeros, una segunda
    //dama con 8, una tercera con 9, y así sucesivamente hasta que la última bailó con todos los hombres.
    //Cuantas damas había en el baile?
    
    dama=7
    cont=0
    while (dama<42){
        console.log(`${dama}`)
        dama++
        cont++

        console.log(`La cantidad de damas que hay en total son: ${cont}`)
    }
})
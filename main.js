addEventListener("DOMContentLoaded",()=>{
// Ejercicio 5
    //El profesor de una materia desea conocer la cantidad de sus alumnos que no tienen derecho al examen
    //de nivelación. Diseñe un pseudocódigo que lea las calificaciones obtenidas en las 5 unidades por cada
    //uno de los 40 alumnos y escriba la cantidad de ellos que no tienen derecho al examen de nivelación
    
    e=0
    p=0
    while (e<4){
        e++
        
        est=prompt("Nombre del estudiante: ")
        
        alert("Coloque sus 5 calificaciones obtenidas")
        cl1=Number(prompt("Calificacion 1: "))
        cl2=Number(prompt("Calificacion 2: "))
        cl3=Number(prompt("Calificacion 3: "))
        cl4=Number(prompt("Calificacion 4: "))
        cl5=Number(prompt("Calificacion 5: "))
        
        prom=(cl1+cl2+cl3+cl4+cl5)/5

        if (prom>4){
            alert(`El estudiante ${est}, puede presentar el examen de nivelacion`)
        }
        if (prom<4){
            alert(`El estudiante ${est}, no puede presentar el examen de nivelacion`)
            p++
        }
    }
    console.log(`La cantidad de estudiantes que no presentan el examen son: ${p} `)

})
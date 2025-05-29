let array1 = [80, 95, 85, 73, 78, 81, 89, 90, 95, 58, 74, 87]; //Cada calificación en un arreglo


function notas(){
    let elementoNotas = document.getElementById("listaNotas");
    elementoNotas.innerHTML = ''; // Limpia la lista antes de añadir nuevas calificaciones
    for(let nota of array1){
        let li = document.createElement("li");
        li.textContent = nota;
        elementoNotas.appendChild(li);
    }
    
}

function promedio(){
    let elementoPromedio = document.getElementById("numPromedio");
    let suma = 0;

    for(let nota1 of array1){
        suma = suma+nota1;
    }

    let prom = suma / array1.length;
    elementoPromedio.textContent = prom;
}

function notaAlta(){
    let i = 0;
    let notaMasAlta = 0;

    while(i < array1.length){
        if(array1[i] > notaMasAlta){
            notaMasAlta = array1[i];
        }
        i++;
    }
    numNota.textContent = notaMasAlta;
}

function aplazado(){
    let elementoAplazado = document.getElementById("respAplazados");

    let i = 0;
    do {
        i++;
        if(array1[i] < 70){
            elementoAplazado.textContent = "Sí hay estudiantes aplazados"
            break;
        } else{
            elementoAplazado.textContent = "No hay estudiantes aplazados"
        }
        
    } while (i < 12);
        
}
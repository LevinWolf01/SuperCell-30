function cargarActv11() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Suma de elementos de vector con ciclo 'for' </h3>
        <hr width="60%">

        <br><br>

        <label for="vectorInput"> Llenar Array con números desde el 0 hasta el:  </label>
        <input type="number" id="vectorInput">

        <br><br>
        <hr width ="40%">
        <br><br>

        <p> En este caso, se llenará un array con números desde el 0 hasta el número ingresado. </p>
        <p> Luego, se mostrará el array generado y la suma de todos sus elementos. </p>

        <br><br>

        <button id="procesarVector"> Mostrar Vector </button>

        <br><br>

        <div id= "vectoresGenerados"> </div>
        <br><br>
        <div id= "sumaTotalVectores"> </div>
        <br><br>

    `);

    document.getElementById("procesarVector").addEventListener('click', procesarVector);
}

function procesarVector() {
    //Limite de hasta a que numero se llenará el array
    const arraylimit = parseInt(document.getElementById("vectorInput").value);

    //lugar donde se almacenarán los numeros del array
    let arr = []

    //variable donde se almacenará la suma de todos los numeros generados
    const contenedorSuma = document.getElementById("sumaTotalVectores");

    for (let i = 0; i < arraylimit; i++){
        arr.push(i);
    }

    document.getElementById("vectoresGenerados").innerHTML = `los numeros generados del vector son:  ${arr.join(", ")}`;


    let suma = sumArrayElements(arr);
    document.getElementById("sumaTotalVectores").innerHTML = `La suma de todos los elementos del array es: ${suma}`;

}


function sumArrayElements(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

export { cargarActv11, procesarVector, sumArrayElements };

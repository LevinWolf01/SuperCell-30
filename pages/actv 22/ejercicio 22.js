export function cargarActv22() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Calcular el producto punto entre dos vectores </h3>
        <hr width="60%">

        <br><br>

        <p> Recuerde que el producto punto es la suma de los productos de los elementos de los vectores. </p>
        <p> Ejemplo rápido: </p>
        <p> A = [2, 3, 4] </p>
        <p> B = [1, 5, 2] </p>
        <br>
        <p> Producto punto: </p>
        <p> 2 * 1 = 2 </p>
        <p> 3 * 5 = 15 </p>
        <p> 4 * 2 = 8 </p> 
        <br>
        <p> Suma Total: </p>
        <p> 2+15+8=25 </p>
        <p> Por lo tanto, el producto punto de A y B es: 25 </p>

        <br><br>
        <hr width="40%">
        <br><br>

        <label for="vectorAInput"> Ingrese el Vector A (valores separados por comas): </label>
        <input type="text" id="vectorAInput">

        <br><br>

        <label for="vectorBInput"> Ingrese el Vector B (valores separados por comas): </label>
        <input type="text" id="vectorBInput">

        <br><br>

        <button id="btnProductoPunto"> Calcular Producto Punto </button>

        <br><br>

        <p id="resultado22"></p>
    `);

    document.getElementById("btnProductoPunto").addEventListener("click", calcularProductoPunto);
}

//--------------------------------------------------------------------------------------------------------------
// Función principal
export function calcularProductoPunto() {
    const vectorAInput = document.getElementById("vectorAInput").value;
    const vectorBInput = document.getElementById("vectorBInput").value;

    //por si están vacios
    if (!vectorAInput || !vectorBInput) {
        document.getElementById("resultado22").innerText =
            "Por favor ingrese ambos vectores.";
        return;
    }

    const vectorA = vectorAInput.split(",").map(num => Number(num.trim()));
    const vectorB = vectorBInput.split(",").map(num => Number(num.trim()));

    //por si uno tiene mas que el otro
    if (vectorA.length !== vectorB.length) {
        document.getElementById("resultado22").innerText = ("Los vectores deben tener la misma cantidad de elementos.");
        return;
    }

    const resultado = dotProduct(vectorA, vectorB);
    document.getElementById("resultado22").innerText = ("El producto punto es: " + resultado);
}

//-------------------------------------------------------------------------------------------------------------------------------
// Y esta, pos es la funcion que calcula el producto punto entre los dos vectores
export function dotProduct(vectorA, vectorB) {
    let producto = 0;

    for (let i = 0; i < vectorA.length; i++) {
        producto += vectorA[i] * vectorB[i];
    }

    return producto;
}
export function cargarActv23() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Calcular la convolución entre dos vectores usando ciclos anidados </h3>
        <hr width="60%">

        <br><br>

        <p><b> Convolución: </b></p>
        <p> Una Convolución es una operación matemática donde tomas dos vectores y produces un tercero combinando cada elemento del primero con cada elemento del segundo, sumando resultados en posiciones específicas.
        <p><b> Imagina dos listas: </b></p>
        <p> Vector X = [a, b, c] </p>
        <p> Vector Y = [d, e]    </p>
        <br>
        <p><b> La Convolución de estos vectores: </b></p>
        <p> 1. Multiplica cada elemento de X con cada elemento de Y </p>
        <p> 2. Pero cada resultado va a una posición diferente dependiendo del índice </p>


        <br><br>
        <hr width="40%">
        <br><br>

        <label for="vectorXInput"> Ingrese el Vector X (valores separados por comas): </label>
        <input type="text" id="vectorXInput">

        <br><br>

        <label for="vectorYInput"> Ingrese el Vector Y (valores separados por comas): </label>
        <input type="text" id="vectorYInput">

        <br><br>

        <button id="btnConvolucion"> Calcular Convolución </button>

        <br><br>

        <p id="resultado23"></p>
    `);

    document.getElementById("btnConvolucion").addEventListener("click", procesarConvolucion);
}

//--------------------------------------------------------------------------------------------------------------------

// Función principal
export function procesarConvolucion() {
    const vectorXInput = document.getElementById("vectorXInput").value;
    const vectorYInput = document.getElementById("vectorYInput").value;

    if (!vectorXInput || !vectorYInput) {
        document.getElementById("resultado23").innerText = ("Por favor ingrese ambos vectores.");
        return;
    }

    const vectorX = vectorXInput.split(",").map(num => Number(num.trim()));
    const vectorY = vectorYInput.split(",").map(num => Number(num.trim()));

    const resultado = calculateConvolution(vectorX, vectorY);
    document.getElementById("resultado23").innerHTML =("<b>Resultado de la convolución:</b> " + JSON.stringify(resultado));
}

//----------------------------------------------------------------------------------------------------------------------------
// Convolución de vectores usando for anidados
export function calculateConvolution(vectorX, vectorY) {
    const n = vectorX.length;
    const m = vectorY.length;

    const resultado = new Array(n + m - 1).fill(0);
    // con .fill(0) estoy rellenando los nuevos espacios del array con ceros, para que las sumas funcionen bien

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            resultado[i + j] += vectorX[i] * vectorY[j];
        }
    }

    return resultado;
}

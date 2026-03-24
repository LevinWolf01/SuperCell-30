export function cargarActv21() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Calcular la matriz transpuesta usando ciclos 'for' anidados </h3>
        <hr width="60%">

        <br><br>

        <label for="matrixInput"> Ingrese la matriz (filas separadas por ' ; ' y elementos por ' ,  '): </label>
        <input type="text" id="matrixInput">

        <br><br>
        <button id="btnProcesarMatriz"> Calcular Transpuesta </button>
        <br><br>

        <p id="resultado21"></p>
    `);

    document.getElementById("btnProcesarMatriz").addEventListener("click", procesarMatriz);
}

//------------------------------------------------------------------------------------------------------------------
//Con esta funcion, convierto el texto ingresado en una matriz 2D
export function parseMatrix(input) {
    return input
        .split(";")                        // Separa filas
        .map(fila => fila
            .split(",")                    // Separa columnas
            .map(num => num.trim())        // Limpia espacios
        );
}

//------------------------------------------------------------------------------------------------------------------
// esta funcion calcula la transpuesta de una matriz
export function transposeMatrix(matrix) {
    const filas = matrix.length;
    const columnas = matrix[0].length;

    const transpuesta = [];

    for (let i = 0; i < columnas; i++) {
        transpuesta[i] = [];               // Crea nueva fila

        for (let j = 0; j < filas; j++) {
            transpuesta[i][j] = matrix[j][i]; // Intercambia i/j
        }
    }

    return transpuesta;
}

//--------------------------------------------------------------------------------------------------------------------
// Y esta, pos es la Función principal :v
export function procesarMatriz() {
    const input = document.getElementById("matrixInput").value;

    if (!input) {
        document.getElementById("resultado21").innerText =
            "Por favor ingrese una matriz.";
        return;
    }

    const matriz = parseMatrix(input);
    const transpuesta = transposeMatrix(matriz);
    document.getElementById("resultado21").innerHTML ="<b>Matriz transpuesta:</b><br><br>" + JSON.stringify(transpuesta, null, 2);
    //por si las dudas, "JSON.stringify()", convierte Arrays u Objetos a texto legible sin perder su estructura.
}